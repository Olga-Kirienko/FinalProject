import { test, expect } from '@playwright/test';
import { Header } from '../components/Header';
import { ProductListingPage } from '../pages/ProductListingPage';
import { ProductPage } from '../pages/ProductPage';

test('User makes search for a product and opens its card', async ({ page }) => {
  const header = new Header(page);
  const productPage = new ProductPage(page);
  const productListingPage = new ProductListingPage(page);

  await page.goto('/');
  await header.searchFor('Samsung SyncMaster', 'click');
  await productListingPage.selectProduct('Samsung SyncMaster');

  await expect(productPage.productTitle).toHaveText('Samsung SyncMaster');
});
