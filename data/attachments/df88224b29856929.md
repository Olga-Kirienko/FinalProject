# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Adding a product to the cart and checking its name and quantity in the cart
- Location: tests/cart.spec.ts:7:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByRole('button', { name: /item\(s\)/ })
Expected pattern: /1 item\(s\)/
Received string:  " 3 item(s) - $366.00"
Timeout: 5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByRole('button', { name: /item\(s\)/ })
    14 × locator resolved to <button type="button" data-toggle="dropdown" data-loading-text="Loading..." class="btn btn-inverse btn-block btn-lg dropdown-toggle">…</button>
       - unexpected value " 3 item(s) - $366.00"

```

```yaml
- button " 3 item(s) - $366.00"
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/cart.fixture';
  2  | import { CartPage } from '../pages/CartPage';
  3  | import { Header } from '../components/Header';
  4  | import { ProductPage } from '../pages/ProductPage';
  5  | import { existingProducts } from '../test-data/existing-products.data';
  6  | 
  7  | test('Adding a product to the cart and checking its name and quantity in the cart', async ({
  8  |   page,
  9  | }) => {
  10 |   const header = new Header(page);
  11 |   const cartPage = new CartPage(page);
  12 |   const productPage = new ProductPage(page);
  13 | 
  14 |   await page.goto(
  15 |     `/index.php?route=product/product&product_id=${existingProducts.imac.id}`
  16 |   );
  17 |   await productPage.addToCart();
  18 | 
  19 |   await expect(productPage.addToCartSuccessMessage).toBeVisible();
  20 | 
> 21 |   await expect(header.cartButton).toHaveText(/1 item\(s\)/);
     |                                   ^ Error: expect(locator).toHaveText(expected) failed
  22 | 
  23 |   await header.goToCart();
  24 | 
  25 |   await expect(
  26 |     cartPage.productRow(existingProducts.imac.product)
  27 |   ).toBeVisible();
  28 | 
  29 |   await expect(
  30 |     cartPage.getQuantityInput(existingProducts.imac.product)
  31 |   ).toHaveValue('1');
  32 | });
  33 | 
  34 | test('Changing product quantity recalculates total number and sum', async ({
  35 |   cartWithProduct,
  36 | }) => {
  37 |   const { product } = existingProducts.imac;
  38 |   const unitPriceText = await cartWithProduct
  39 |     .getUnitPrice(product)
  40 |     .textContent();
  41 |   const unitPrice = parseFloat(unitPriceText!.replace('$', ''));
  42 |   const expectedTotal = `$${(unitPrice * 2).toFixed(2)}`;
  43 | 
  44 |   await cartWithProduct.getQuantityInput(product).fill('2');
  45 |   await cartWithProduct.getUpdateButton(product).click();
  46 | 
  47 |   await expect(cartWithProduct.getQuantityInput(product)).toHaveValue('2');
  48 |   await expect(cartWithProduct.getRowTotal(product)).toHaveText(expectedTotal);
  49 | });
  50 | 
  51 | test('Removing The product from the cart', async ({ cartWithProduct }) => {
  52 |   const { product } = existingProducts.imac;
  53 | 
  54 |   await cartWithProduct.getRemoveButton(product).click();
  55 |   await expect(cartWithProduct.productRow(product)).toHaveCount(0);
  56 | });
  57 | 
  58 | test('Applying an invalid coupon', async ({ cartWithProduct }) => {
  59 |   await cartWithProduct.useCouponCodeLink.click();
  60 |   await cartWithProduct.couponInput.fill('1111');
  61 |   await cartWithProduct.applyCouponButton.click();
  62 | 
  63 |   await expect(cartWithProduct.couponMessage).toBeVisible();
  64 | });
  65 | 
```