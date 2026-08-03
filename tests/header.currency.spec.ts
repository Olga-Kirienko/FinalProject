import { test, expect } from '@playwright/test';
import { Header } from '../components/Header';
import { ProductListingPage } from '../pages/ProductListingPage';
import { ProductPage } from '../pages/ProductPage';
import { existingProducts } from '../test-data/existing-products.data';

test('Product price recalculates after currency switch', async ({ page }) => {
  const header = new Header(page);
  const productListingPage = new ProductListingPage(page);
  const productPage = new ProductPage(page);

  const { product } = existingProducts.imac;

  await page.route('**/*addthis*', (route) => route.abort());

  await page.goto('/', { waitUntil: 'networkidle' });
  await header.searchFor(product, 'click');
  await productListingPage.selectProduct(product);

  // Ensure starting currency
  await header.switchCurrency('$ US Dollar');

  const priceBeforeSwitch = await productPage.getPrice();
  console.log('DEBUG priceBeforeSwitch:', priceBeforeSwitch);

  await header.switchCurrency('€ Euro');
  await productPage.waitForPriceChange(priceBeforeSwitch);

  const priceAfterSwitch = await productPage.getPrice();
  console.log('DEBUG priceAfterSwitch:', priceAfterSwitch);
  expect(priceAfterSwitch).not.toBe(priceBeforeSwitch);
});
