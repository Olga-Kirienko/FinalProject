import { type Locator } from '@playwright/test';

export class DeliveryMethodComponent {
  readonly section: Locator;
  readonly commentsForm: Locator;
  readonly continueButton: Locator;

  constructor(section: Locator) {
    this.section = section;
    this.commentsForm = section.getByRole('textbox');
    this.continueButton = section.getByRole('button', { name: 'Continue' });
  }

  async fillOrderComment(text: string): Promise<void> {
    await this.commentsForm.fill(text);
  }

  async clickContinue(): Promise<void> {
    await this.continueButton.click();
  }
}
