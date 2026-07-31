import { test as base } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { existingProducts } from '../test-data/existing-products.data';
import { ProductPage } from '../pages/ProductPage';
import { Header } from '../components/Header';

type CartFixtures = {
  cartWithProduct: CartPage;
};

export const test = base.extend<CartFixtures>({
  cartWithProduct: async ({ page }, use) => {
    const cartWithProduct = new CartPage(page);
    const productPage = new ProductPage(page);
    const header = new Header(page);

    await page.goto(
      `/index.php?route=product/product&product_id=${existingProducts.imac.id}`
    );
    await productPage.addToCart();
    await header.goToCart();

    await use(cartWithProduct);
  },
});

export { expect } from '@playwright/test';
