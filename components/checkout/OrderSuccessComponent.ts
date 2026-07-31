import { type Locator, type Page } from '@playwright/test';

export class OrderSuccessComponent {
  readonly page: Page;
  readonly successHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successHeading = page.getByRole('heading', {
      name: 'Your order has been placed!',
    });
  }

  getSuccessHeading(): Locator {
    return this.successHeading;
  }
}
