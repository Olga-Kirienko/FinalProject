import { type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly productTitle: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.getByRole('heading', { level: 1 });
    // There are 2 buttons 'Add to Cart' on the page. 'getByRole' isn't unique
    // That's why here we use css locator
    this.addToCartButton = page.locator('#button-cart');
  }

  async addToCart(): Promise<void> {
    await this.addToCartButton.click();
  }
}
