import { test, expect } from '@playwright/test';

test('Chaining: product added via cart/add is visible on the cart page', async ({
  request,
}) => {
  const response = await request.post(
    'https://opencart.abstracta.us/index.php?route=checkout/cart/add',
    {
      form: {
        product_id: '41',
        quantity: '1',
      },
    }
  );

  const body = await response.json();

  // checking that body contains field success
  expect(body).toHaveProperty('success');
  expect(body.success).toContain('Success');
  expect(body.success).toContain('iMac');

  const cartPageResponse = await request.get(
    'https://opencart.abstracta.us/index.php?route=checkout/cart'
  );

  expect(cartPageResponse.status()).toBe(200);
  const cartPageText = await cartPageResponse.text();
  expect(cartPageText).toContain('iMac');
});
