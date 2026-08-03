import { test, expect } from '@playwright/test';
import { PurchaseFacade } from '../facade/PurchaseFacade';
import { CheckoutOptions } from '../types/CheckoutOptions';
import { existingProducts } from '../test-data/existing-products.data';

test("e2e test with 1 item, method 'Cash On Delivery' — parses order summary table", async ({
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
  const confirmOrder = await facade.proceedToConfirmOrder(options);

  const lineItems = await confirmOrder.getLineItems();
  const subtotal = await confirmOrder.getSubTotalSum();
  const shipping = await confirmOrder.getShippingValue();
  const total = await confirmOrder.getTotalSum();

  // productName check
  expect(lineItems[0].productName).toBe(existingProducts.imac.product);

  // calculate expected Total
  const expectedTotal = `$${(
    parseFloat(lineItems[0].unitPrice.replace('$', '')) *
    Number(lineItems[0].quantity)
  ).toFixed(2)}`;

  // comparison expected Total with Total from Table
  expect(lineItems[0].total).toBe(expectedTotal);

  // comparison expected Total with Total from Table
  expect(subtotal).toBe(expectedTotal);

  const expectedGrandTotal = `$${(
    parseFloat(subtotal.replace('$', '')) +
    parseFloat(shipping.replace('$', ''))
  ).toFixed(2)}`;

  expect(total).toBe(expectedGrandTotal);
});
