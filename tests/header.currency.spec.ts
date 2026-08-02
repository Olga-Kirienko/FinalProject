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

  await page.goto('/');
  await header.searchFor(product, 'click');
  await productListingPage.selectProduct(product);

  const priceBeforeSwitch = await productPage.getPrice();

  await header.switchCurrency('€ Euro');

  const priceAfterSwitch = await productPage.getPrice();

  expect(priceAfterSwitch).not.toBe(priceBeforeSwitch);
});
