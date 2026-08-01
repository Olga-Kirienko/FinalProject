import { type Locator, expect } from '@playwright/test';
import { LineItem } from '../../types/LineItem';

export class ConfirmOrderComponent {
  readonly section: Locator;
  readonly totalSum: Locator;
  readonly subTotalSum: Locator;
  readonly shippingValue: Locator;
  readonly productRows: Locator;
  readonly confirmOrderButton: Locator;

  constructor(section: Locator) {
    this.section = section;
    this.totalSum = section
      .locator('tr')
      .filter({ hasText: /^Total:/ })
      .locator('td')
      .last();
    this.subTotalSum = section
      .locator('tr')
      .filter({ hasText: 'Sub-Total:' })
      .locator('td')
      .last();
    this.shippingValue = section
      .locator('tr')
      .filter({ hasText: 'Shipping' })
      .locator('td')
      .last();
    this.productRows = section.locator('tbody tr');
    this.confirmOrderButton = this.section.getByRole('button', {
      name: 'Confirm Order',
    });
  }

  async getTotalSum(): Promise<string> {
    await expect(this.totalSum).toContainText('$', { timeout: 30000 });
    return (await this.totalSum.textContent()) ?? '';
  }

  async getSubTotalSum(): Promise<string> {
    await expect(this.subTotalSum).toContainText('$', { timeout: 30000 });
    return (await this.subTotalSum.textContent()) ?? '';
  }

  async getShippingValue(): Promise<string> {
    await expect(this.shippingValue).toContainText('$', { timeout: 30000 });
    return (await this.shippingValue.textContent()) ?? '';
  }

  async getLineItems(): Promise<LineItem[]> {
    await expect(this.productRows.first()).toBeVisible({ timeout: 30000 });
    const rows = await this.productRows.all();
    const items: LineItem[] = [];

    for (const row of rows) {
      items.push({
        productName: (await row.locator('td').nth(0).textContent()) ?? '',
        model: (await row.locator('td').nth(1).textContent()) ?? '',
        quantity: (await row.locator('td').nth(2).textContent()) ?? '',
        unitPrice: (await row.locator('td').nth(3).textContent()) ?? '',
        total: (await row.locator('td').nth(4).textContent()) ?? '',
      });
    }
    return items;
  }

  async confirmOrder(): Promise<void> {
    await this.confirmOrderButton.click();
  }
}
