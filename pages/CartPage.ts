import { type Page, type Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly useCouponCodeLink: Locator;
  readonly couponInput: Locator;
  readonly applyCouponButton: Locator;
  readonly couponMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.useCouponCodeLink = page.getByRole('link', {
      name: 'Use Coupon Code',
    });
    this.couponInput = page.getByRole('textbox', {
      name: 'Enter your coupon here',
    });
    this.applyCouponButton = page.getByRole('button', { name: 'Apply Coupon' });
    this.couponMessage = page.getByText('Warning: Coupon is either');
  }

  productRow(productName: string): Locator {
    return this.page.getByRole('row', { name: productName });
  }

  getQuantityInput(productName: string): Locator {
    return this.productRow(productName).getByRole('textbox');
  }

  getUpdateButton(productName: string): Locator {
    return this.productRow(productName).locator(
      '[data-original-title="Update"]'
    );
  }

  getRowTotal(productName: string): Locator {
    return this.productRow(productName).getByRole('cell').last();
  }

  getUnitPrice(productName: string): Locator {
    return this.productRow(productName).getByRole('cell').nth(4);
  }

  getRemoveButton(productName: string): Locator {
    return this.productRow(productName).locator(
      '[data-original-title="Remove"]'
    );
  }

  getAnyRemoveButton(): Locator {
    return this.page.locator('[data-original-title="Remove"]').first();
  }
}
