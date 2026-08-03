import { type Locator, type Page } from '@playwright/test';

export type Currency = '€ Euro' | '£ Pound Sterling' | '$ US Dollar';
export class Header {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly cartButton: Locator;
  readonly viewCartLink: Locator;
  readonly checkoutLink: Locator;
  readonly wishlistLink: Locator;
  readonly currencyToggle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole('textbox', { name: 'Search' });
    // No accessible name on icon button — scoped via #search id instead
    this.searchButton = page.locator('#search').getByRole('button');
    this.cartButton = page.getByRole('button', { name: /item\(s\)/ });
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
    this.checkoutLink = page.getByRole('link', {
      name: 'Checkout',
      exact: true,
    });
    this.wishlistLink = this.wishlistLink =
      page.getByTitle(/Wish List \(\d+\)/);
    // here css is a compromise
    this.currencyToggle = page.locator('#form-currency .dropdown-toggle');
  }

  async searchFor(query: string, method: 'enter' | 'click'): Promise<void> {
    await this.searchInput.fill(query);

    if (method === 'enter') {
      await this.searchInput.press('Enter');
    } else {
      await this.searchButton.click();
    }
  }

  async goToCart(): Promise<void> {
    await this.cartButton.click();
    await this.viewCartLink.click();
  }

  async goToWishlist(): Promise<void> {
    await this.wishlistLink.click();
  }

  async goToCheckout(): Promise<void> {
    await this.cartButton.click();
    await this.checkoutLink.click();
  }

  async switchCurrency(currency: Currency): Promise<void> {
    await this.currencyToggle.click();
    await this.page.getByRole('button', { name: currency }).click();
  }
}
