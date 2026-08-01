import { test, expect } from '@playwright/test';
import { PurchaseFacade } from '../facade/PurchaseFacade';
import { CheckoutOptions } from '../types/CheckoutOptions';
import { existingProducts } from '../test-data/existing-products.data';
import { OrderSuccessComponent } from '../components/checkout/OrderSuccessComponent';

test.describe('Checkout e2e', () => {
  test("e2e test with 1 item, method 'Cash On Delivery' and comment", async ({
    page,
  }) => {
    test.setTimeout(60000);

    const options: CheckoutOptions = {
      products: [
        {
          productId: existingProducts.imac.id,
          productName: existingProducts.imac.product,
          quantity: 1,
        },
      ],
      paymentMethod: 'Cash On Delivery',
      comment: 'Please deliver in the morning',
    };

    const facade = new PurchaseFacade(page);
    await facade.completeCheckout(options);

    const orderSuccess = new OrderSuccessComponent(page);
    await expect(orderSuccess.getSuccessHeading()).toBeVisible();
    expect(page.url()).toContain('route=checkout/success');
  });
});
