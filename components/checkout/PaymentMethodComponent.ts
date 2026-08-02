import { type Locator, expect } from '@playwright/test';

export class PaymentMethodComponent {
  readonly section: Locator;
  readonly orderCommentInput: Locator;
  readonly termsAndConditionsCheckbox: Locator;
  readonly continueButton: Locator;

  constructor(section: Locator) {
    this.section = section;
    this.orderCommentInput = section.getByRole('textbox');
    this.termsAndConditionsCheckbox = section.getByRole('checkbox');
    this.continueButton = section.getByRole('button', { name: 'Continue' });
  }

  async selectPaymentMethod(method: string): Promise<void> {
    const radio = this.section.getByRole('radio', { name: method });
    await radio.click();
    await expect(radio).toBeChecked({ timeout: 10000 });

    //await radio.evaluate((el: HTMLInputElement) => el.checked);
  }

  async fillOrderComment(text: string): Promise<void> {
    await this.orderCommentInput.fill(text);
  }

  async acceptTermsAndConditions(): Promise<void> {
    await this.termsAndConditionsCheckbox.check();
  }

  async clickContinue(): Promise<void> {
    await this.continueButton.click();
  }
}
