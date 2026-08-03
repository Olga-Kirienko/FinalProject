import { type Locator, type Page, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly productTitle: Locator;
  readonly addToCartButton: Locator;
  readonly addToWishlistButton: Locator;
  readonly wishlistSuccessMessage: Locator;
  readonly price: Locator;
  readonly addToCartSuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    // Store logo is also <h1>, so scope to #content to keep the product title unique
    this.productTitle = page
      .locator('#content')
      .getByRole('heading', { level: 1 });
    // There are 2 buttons 'Add to Cart' on the page. 'getByRole' isn't unique
    // That's why here we use css locator
    this.addToCartButton = page.locator('#button-cart');
    // Bootstrap tooltip moves 'title' into 'data-original-title' on page load,
    // leaving 'title' empty
    this.addToWishlistButton = page
      .locator('[data-original-title="Add to Wish List"]')
      .first();
    this.wishlistSuccessMessage = page.getByText('to your wish list');
    this.addToCartSuccessMessage = page.getByText('to your shopping cart');
    this.price = page
      .locator('#content .col-sm-4')
      .getByRole('heading', { level: 2 });
  }

  async addToCart(): Promise<void> {
    await this.addToCartButton.click();
  }

  async addToWishlist(): Promise<void> {
    await this.addToWishlistButton.click();
  }

  async getPrice(): Promise<number> {
    const text = await this.price.innerText();
    const match = text.match(/[\d.,]+/);
    return match ? parseFloat(match[0].replace(',', '.')) : NaN;
  }
  // this is a sync wait, not a business assertion
  async waitForPriceChange(previousPrice: number): Promise<void> {
    await expect
      .poll(async () => this.getPrice(), { timeout: 10000 })
      .not.toBe(previousPrice);
  }
}
