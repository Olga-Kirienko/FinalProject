import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly emailAddressInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loginErrorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.emailAddressInput = page.getByRole('textbox', {
      name: 'E-Mail Address',
    });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.loginErrorMessage = page.locator('#account-login');
  }

  async goto(): Promise<void> {
    await super.goto('index.php?route=account/login');
  }

  async emailAddressInputFill(email: string): Promise<void> {
    await this.emailAddressInput.fill(email);
  }

  async passwordInputFill(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async loginButtonClick(): Promise<void> {
    await this.loginButton.click();
  }
}
