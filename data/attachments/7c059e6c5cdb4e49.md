# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: wishlist.spec.ts >> Adding a product to the wish list
- Location: tests/wishlist.spec.ts:7:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByRole('link', { name: /Wish List \(\d+\)/ })
Expected: "Wish List (1)"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByRole('link', { name: /Wish List \(\d+\)/ })

```

```yaml
- navigation:
  - button "$ ":
    - strong: $
    - text: 
  - list:
    - listitem:
      - link "":
        - /url: http://opencart.abstracta.us:80/index.php?route=information/contact
    - listitem:
      - link "":
        - /url: https://opencart.abstracta.us:443/index.php?route=account/account
    - listitem:
      - link "":
        - /url: https://opencart.abstracta.us:443/index.php?route=account/wishlist
    - listitem:
      - link "":
        - /url: http://opencart.abstracta.us:80/index.php?route=checkout/cart
    - listitem:
      - link "":
        - /url: https://opencart.abstracta.us:443/index.php?route=checkout/checkout
- banner:
  - heading "Your Store" [level=1]:
    - link "Your Store":
      - /url: http://opencart.abstracta.us:80/index.php?route=common/home
  - textbox "Search"
  - button ""
  - button " 1 item(s) - $122.00"
- navigation:
  - text: Categories
  - button ""
- list:
  - listitem:
    - link "":
      - /url: http://opencart.abstracta.us:80/index.php?route=common/home
  - listitem:
    - link "iMac":
      - /url: http://opencart.abstracta.us:80/index.php?route=product/product&product_id=41
- text: " Success: You have added"
- link "iMac":
  - /url: http://opencart.abstracta.us:80/index.php?route=product/product&product_id=41
- text: to your
- link "wish list":
  - /url: http://opencart.abstracta.us:80/index.php?route=account/wishlist
- text: "!"
- button "×"
- list:
  - listitem:
    - link "iMac":
      - /url: https://opencart.abstracta.us:443/image/cache/catalog/demo/imac_1-500x500.jpg
      - img "iMac"
  - listitem:
    - link "iMac":
      - /url: https://opencart.abstracta.us:443/image/cache/catalog/demo/imac_2-500x500.jpg
      - img "iMac"
  - listitem:
    - link "iMac":
      - /url: https://opencart.abstracta.us:443/image/cache/catalog/demo/imac_3-500x500.jpg
      - img "iMac"
- list:
  - listitem:
    - link "Description":
      - /url: "#tab-description"
  - listitem:
    - link "Reviews (0)":
      - /url: "#tab-review"
- text: Just when you thought iMac had everything, now there´s even more. More powerful Intel Core 2 Duo processors. And more memory standard. Combine this with Mac OS X Leopard and iLife ´08, and it´s more all-in-one than ever. iMac packs amazing performance into a stunningly slim space.
- button ""
- button ""
- heading "iMac" [level=1]
- list:
  - listitem:
    - text: Brands
    - link "Apple":
      - /url: http://opencart.abstracta.us:80/index.php?route=product/manufacturer/info&manufacturer_id=8
  - listitem: "Product Code: Product 14"
  - listitem: "Availability: 479"
- list:
  - listitem:
    - heading "$122.00" [level=2]
  - listitem: "Ex Tax: $100.00"
- text: Qty
- textbox "Qty": "1"
- button "Add to Cart"
- paragraph:
  - text:     
  - link "0 reviews":
    - /url: ""
  - text: /
  - link "Write a review":
    - /url: ""
- separator
- heading "Related Products" [level=3]
- link "Apple Cinema 30\"":
  - /url: http://opencart.abstracta.us:80/index.php?route=product/product&product_id=42
  - img "Apple Cinema 30\""
- heading "Apple Cinema 30\"" [level=4]:
  - link "Apple Cinema 30\"":
    - /url: http://opencart.abstracta.us:80/index.php?route=product/product&product_id=42
- paragraph: The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed speci..
- paragraph: "$110.00 $122.00 Ex Tax: $90.00"
- button ""
- button ""
- button ""
- contentinfo:
  - heading "Information" [level=5]
  - list:
    - listitem:
      - link "About Us":
        - /url: http://opencart.abstracta.us:80/index.php?route=information/information&information_id=4
    - listitem:
      - link "Delivery Information":
        - /url: http://opencart.abstracta.us:80/index.php?route=information/information&information_id=6
    - listitem:
      - link "Privacy Policy":
        - /url: http://opencart.abstracta.us:80/index.php?route=information/information&information_id=3
    - listitem:
      - link "Terms & Conditions":
        - /url: http://opencart.abstracta.us:80/index.php?route=information/information&information_id=5
  - heading "Customer Service" [level=5]
  - list:
    - listitem:
      - link "Contact Us":
        - /url: http://opencart.abstracta.us:80/index.php?route=information/contact
    - listitem:
      - link "Returns":
        - /url: https://opencart.abstracta.us:443/index.php?route=account/return/add
    - listitem:
      - link "Site Map":
        - /url: http://opencart.abstracta.us:80/index.php?route=information/sitemap
  - heading "Extras" [level=5]
  - list:
    - listitem:
      - link "Brands":
        - /url: http://opencart.abstracta.us:80/index.php?route=product/manufacturer
    - listitem:
      - link "Gift Certificates":
        - /url: https://opencart.abstracta.us:443/index.php?route=account/voucher
    - listitem:
      - link "Affiliate":
        - /url: https://opencart.abstracta.us:443/index.php?route=affiliate/login
    - listitem:
      - link "Specials":
        - /url: http://opencart.abstracta.us:80/index.php?route=product/special
  - heading "My Account" [level=5]
  - list:
    - listitem:
      - link "My Account":
        - /url: https://opencart.abstracta.us:443/index.php?route=account/account
    - listitem:
      - link "Order History":
        - /url: https://opencart.abstracta.us:443/index.php?route=account/order
    - listitem:
      - link "Wish List":
        - /url: https://opencart.abstracta.us:443/index.php?route=account/wishlist
    - listitem:
      - link "Newsletter":
        - /url: https://opencart.abstracta.us:443/index.php?route=account/newsletter
  - separator
  - paragraph:
    - text: Powered By
    - link "OpenCart":
      - /url: http://www.opencart.com
    - text: Your Store © 2026
- link "Bitnami":
  - /url: /bitnami/index.html
  - img "Bitnami"
- tooltip "Add to Wish List"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { ProductPage } from '../pages/ProductPage';
  3  | import { WishlistPage } from '../pages/WishlistPage';
  4  | import { Header } from '../components/Header';
  5  | import { existingProducts } from '../test-data/existing-products.data';
  6  | 
  7  | test('Adding a product to the wish list', async ({ page }) => {
  8  |   const productPage = new ProductPage(page);
  9  |   const wishlistPage = new WishlistPage(page);
  10 |   const header = new Header(page);
  11 |   const { product, id } = existingProducts.imac;
  12 | 
  13 |   await page.goto(`/index.php?route=product/product&product_id=${id}`);
  14 |   await productPage.addToWishlist();
  15 | 
  16 |   await expect(productPage.wishlistSuccessMessage).toBeVisible();
> 17 |   await expect(header.wishlistLink).toHaveText('Wish List (1)');
     |                                     ^ Error: expect(locator).toHaveText(expected) failed
  18 | 
  19 |   await header.goToWishlist();
  20 | 
  21 |   await expect(wishlistPage.productRow(product)).toBeVisible();
  22 | });
  23 | 
```