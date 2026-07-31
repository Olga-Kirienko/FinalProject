import { type Page } from '@playwright/test';

export class ProductListingPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectProduct(productName: string): Promise<void> {
    await this.page
      .getByRole('link', { name: productName, exact: true })
      .click();
  }
}
