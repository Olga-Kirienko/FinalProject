import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { WishlistPage } from '../pages/WishlistPage';
import { Header } from '../components/Header';
import { existingProducts } from '../test-data/existing-products.data';

test('Adding a product to the wish list', async ({ page }) => {
  const productPage = new ProductPage(page);
  const wishlistPage = new WishlistPage(page);
  const header = new Header(page);
  const { product, id } = existingProducts.imac;

  await page.goto(`/index.php?route=product/product&product_id=${id}`);
  await productPage.addToWishlist();

  await expect(productPage.wishlistSuccessMessage).toBeVisible();
  await expect(header.wishlistLink).toHaveText('Wish List (1)');

  await header.goToWishlist();

  await expect(wishlistPage.productRow(product)).toBeVisible();
});
