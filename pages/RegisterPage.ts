import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirmInput: Locator;
  readonly privacyPolicyCheckbox: Locator;
  readonly continueButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.getByRole('textbox', { name: '* First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: '* Last Name' });
    this.emailInput = page.getByRole('textbox', { name: '* E-Mail' });
    this.telephoneInput = page.getByRole('textbox', { name: '* Telephone' });
    this.passwordInput = page.getByRole('textbox', {
      name: '* Password',
      exact: true,
    });
    this.passwordConfirmInput = page.getByRole('textbox', {
      name: '* Password Confirm',
    });
    this.privacyPolicyCheckbox = page.getByRole('checkbox');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.successMessage = page.getByText(
      'Congratulations! Your new account has been successfully created!'
    );
  }

  async goto(): Promise<void> {
    await super.goto('index.php?route=account/register');
  }

  async firstNameInputFill(firstName: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
  }

  async lastNameInputFill(lastName: string): Promise<void> {
    await this.lastNameInput.fill(lastName);
  }

  async emailInputFill(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async telephoneInputFill(telephone: string): Promise<void> {
    await this.telephoneInput.fill(telephone);
  }

  async passwordInputFill(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async passwordConfirmInputFill(passwordConfirm: string): Promise<void> {
    await this.passwordConfirmInput.fill(passwordConfirm);
  }

  async checkPrivacyPolicy(): Promise<void> {
    await this.privacyPolicyCheckbox.check();
  }

  async continueButtonClick(): Promise<void> {
    await this.continueButton.click();
  }
}
