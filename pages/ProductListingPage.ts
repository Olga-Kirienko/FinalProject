import { type Page, Locator } from '@playwright/test';

export class ProductListingPage {
  readonly page: Page;
  readonly addToCartButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButtons = page.getByRole('button', { name: 'Add to Cart' });
  }

  async selectProduct(productName: string): Promise<void> {
    await this.page
      .getByRole('heading', { level: 4 })
      .getByRole('link', { name: productName, exact: true })
      .click();
  }
}
