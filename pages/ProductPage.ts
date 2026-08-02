import { type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly productTitle: Locator;
  readonly addToCartButton: Locator;
  readonly addToWishlistButton: Locator;
  readonly wishlistSuccessMessage: Locator;
  readonly price: Locator;

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
    this.wishlistSuccessMessage = page.getByText('Success: You have added');
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
}
