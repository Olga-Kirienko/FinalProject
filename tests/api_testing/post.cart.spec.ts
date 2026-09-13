import { test, expect } from '@playwright/test';

test('POST request to add product to cart returns JSON confirmation', async ({
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

  expect(response.status()).toBe(200);

  const body = await response.json();

  // checking that body contains field success
  expect(body).toHaveProperty('success');
  expect(body.success).toContain('Success');
  expect(body.success).toContain('iMac');

  expect(body).toHaveProperty('total');
  expect(typeof body.total).toBe('string');
});
