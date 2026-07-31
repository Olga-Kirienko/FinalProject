import { test, expect } from '../fixtures/cart.fixture';
import { CartPage } from '../pages/CartPage';
import { Header } from '../components/Header';
import { ProductPage } from '../pages/ProductPage';
import { existingProducts } from '../test-data/existing-products.data';

test('Adding a product to the cart and checking its name and quantity in the cart', async ({
  page,
}) => {
  const header = new Header(page);
  const cartPage = new CartPage(page);
  const productPage = new ProductPage(page);

  await page.goto(
    `/index.php?route=product/product&product_id=${existingProducts.imac.id}`
  );
  await productPage.addToCart();

  await expect(header.cartButton).toHaveText(/1 item\(s\)/);

  await header.goToCart();

  await expect(
    cartPage.productRow(existingProducts.imac.product)
  ).toBeVisible();

  await expect(
    cartPage.getQuantityInput(existingProducts.imac.product)
  ).toHaveValue('1');
});

test('Changing product quantity recalculates total number and sum', async ({
  cartWithProduct,
}) => {
  const { product } = existingProducts.imac;
  const unitPriceText = await cartWithProduct
    .getUnitPrice(product)
    .textContent();
  const unitPrice = parseFloat(unitPriceText!.replace('$', ''));
  const expectedTotal = `$${(unitPrice * 2).toFixed(2)}`;

  await cartWithProduct.getQuantityInput(product).fill('2');
  await cartWithProduct.getUpdateButton(product).click();

  await expect(cartWithProduct.getQuantityInput(product)).toHaveValue('2');
  await expect(cartWithProduct.getRowTotal(product)).toHaveText(expectedTotal);
});

test('Removing The product from the cart', async ({ cartWithProduct }) => {
  const { product } = existingProducts.imac;

  await cartWithProduct.getRemoveButton(product).click();
  await expect(cartWithProduct.productRow(product)).toHaveCount(0);
});

test('Applying an invalid coupon', async ({ cartWithProduct }) => {
  await cartWithProduct.useCouponCodeLink.click();
  await cartWithProduct.couponInput.fill('1111');
  await cartWithProduct.applyCouponButton.click();

  await expect(cartWithProduct.couponMessage).toBeVisible();
});
