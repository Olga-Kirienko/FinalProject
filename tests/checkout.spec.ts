import { test, expect } from '@playwright/test';
import { PurchaseFacade } from '../facade/PurchaseFacade';
import { CheckoutOptions } from '../types/CheckoutOptions';
import { existingProducts } from '../test-data/existing-products.data';
import { OrderSuccessComponent } from '../components/checkout/OrderSuccessComponent';

test.describe('Checkout e2e', () => {
  //test.describe.configure({ retries: 2 });

  test("e2e test with 1 item, method 'Bank Transfer' and comment", async ({
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
    const orderSummary = await facade.completeCheckout(options);

    // productName check
    expect(orderSummary.lineItems[0].productName).toBe(
      existingProducts.imac.product
    );

    // calculate expected Total
    const expectedTotal = `$${(
      parseFloat(orderSummary.lineItems[0].unitPrice.replace('$', '')) *
      Number(orderSummary.lineItems[0].quantity)
    ).toFixed(2)}`;

    // comparison expected Total with Total from Table
    expect(orderSummary.lineItems[0].total).toBe(expectedTotal);

    // comparison expected Total with Total from Table
    expect(orderSummary.subtotal).toBe(expectedTotal);

    const expectedGrandTotal = `$${(
      parseFloat(orderSummary.subtotal.replace('$', '')) +
      parseFloat(orderSummary.shipping.replace('$', ''))
    ).toFixed(2)}`;

    expect(orderSummary.total).toBe(expectedGrandTotal);

    const orderSuccess = new OrderSuccessComponent(page);
    await expect(orderSuccess.getSuccessHeading()).toBeVisible();
    expect(page.url()).toContain('route=checkout/success');
  });
});
