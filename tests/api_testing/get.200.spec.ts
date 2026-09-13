import { test, expect } from '@playwright/test';

test('GET request for product search returns status 200', async ({
  request,
}) => {
  const response = await request.get(
    'https://opencart.abstracta.us/index.php?route=product/search&search=Apple'
  );

  expect(response.status()).toBe(200);
});
