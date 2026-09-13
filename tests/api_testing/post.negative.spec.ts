import { test, expect } from '@playwright/test';

test('EXPLORATION: what the server returns for a non-existent product_id', async ({
  request,
}) => {
  const response = await request.post(
    'https://opencart.abstracta.us/index.php?route=checkout/cart/add',
    {
      form: {
        product_id: '999999',
        quantity: '1',
      },
    }
  );

  console.log('Status:', response.status());
  console.log('Body:', await response.text());
});

test('POST with a non-existent product_id does not add the product to the cart', async ({
  request,
}) => {
  const response = await request.post(
    'https://opencart.abstracta.us/index.php?route=checkout/cart/add',
    {
      form: {
        product_id: '999999',
        quantity: '1',
      },
    }
  );

  // server answers with 200 OK
  expect(response.status()).toBe(200);

  const body = await response.json();

  // body is an empty Array (not object with success)
  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBe(0);
});
