# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> User makes search for a product and opens its card
- Location: tests/search.spec.ts:7:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#content').getByRole('heading', { level: 1 })
Expected: "Samsung SyncMaster 941BW"
Received: "Search - Samsung SyncMaster 941BW"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#content').getByRole('heading', { level: 1 })
    14 × locator resolved to <h1>Search - Samsung SyncMaster 941BW</h1>
       - unexpected value "Search - Samsung SyncMaster 941BW"

```

```yaml
- heading "Search - Samsung SyncMaster 941BW" [level=1]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { Header } from '../components/Header';
  3  | import { ProductListingPage } from '../pages/ProductListingPage';
  4  | import { ProductPage } from '../pages/ProductPage';
  5  | import { existingProducts } from '../test-data/existing-products.data';
  6  | 
  7  | test('User makes search for a product and opens its card', async ({ page }) => {
  8  |   const header = new Header(page);
  9  |   const productPage = new ProductPage(page);
  10 |   const productListingPage = new ProductListingPage(page);
  11 | 
  12 |   await page.goto('/');
  13 | 
  14 |   const { product } = existingProducts.samsungMonitor;
  15 |   await header.searchFor(product, 'click');
  16 |   await productListingPage.selectProduct(product);
> 17 |   await expect(productPage.productTitle).toHaveText(product);
     |                                          ^ Error: expect(locator).toHaveText(expected) failed
  18 | });
  19 | 
```