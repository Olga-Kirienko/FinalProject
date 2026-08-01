import { test, expect } from '@playwright/test';
import { Header } from '../components/Header';
import { ProductListingPage } from '../pages/ProductListingPage';
import { ProductPage } from '../pages/ProductPage';
import { existingProducts } from '../test-data/existing-products.data';

test('User makes search for a product and opens its card', async ({ page }) => {
  const header = new Header(page);
  const productPage = new ProductPage(page);
  const productListingPage = new ProductListingPage(page);

  await page.goto('/');

  const { product } = existingProducts.samsungMonitor;
  await header.searchFor(product, 'click');
  await productListingPage.selectProduct(product);
  await expect(productPage.productTitle).toHaveText(product);
});
