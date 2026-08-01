import { test, expect } from '@playwright/test';
import { PurchaseFacade } from '../facade/PurchaseFacade';
import { CheckoutOptions } from '../types/CheckoutOptions';
import { existingProducts } from '../test-data/existing-products.data';
import { OrderSuccessComponent } from '../components/checkout/OrderSuccessComponent';

test.describe('Checkout e2e', () => {
  test('e2e checkout flow with multiple items, Bank Transfer, no comment', async ({
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
        {
          productId: existingProducts.samsungMonitor.id,
          productName: existingProducts.samsungMonitor.product,
          quantity: 2,
        },
      ],
      paymentMethod: 'Bank Transfer',
      // comment не передаём
    };

    const facade = new PurchaseFacade(page);
    await facade.completeCheckout(options);

    const orderSuccess = new OrderSuccessComponent(page);
    await expect(orderSuccess.getSuccessHeading()).toBeVisible();
    expect(page.url()).toContain('route=checkout/success');
  });
});