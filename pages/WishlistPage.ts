import { type Page, type Locator } from '@playwright/test';

export class WishlistPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  productRow(productName: string): Locator {
    return this.page.getByRole('row', { name: productName });
  }
}
