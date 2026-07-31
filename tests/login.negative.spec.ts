import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import { LoginPage } from '../pages/LoginPage';
import { invalidLoginCases } from '../test-data/invalid-login.data';
import { Credentials } from '../types/Credentials';

test.describe('Login negative cases', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  const existingUser: Credentials = JSON.parse(
    fs.readFileSync('.auth/existing-user.json', 'utf-8')
  );

  for (const testCase of invalidLoginCases) {
    test(testCase.description, async ({ page }) => {
      const credentials = { ...existingUser, ...testCase.overrides };
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.emailAddressInputFill(credentials.email);
      await loginPage.passwordInputFill(credentials.password);

      await loginPage.loginButtonClick();

      await expect(loginPage.loginErrorMessage).toContainText(
        'Warning: No match for E-Mail Address and/or Password.'
      );
    });
  }

  test('Password with leading space', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const passwordWithSpace = existingUser.password + ' ';

    await loginPage.goto();
    await loginPage.emailAddressInputFill(existingUser.email);
    await loginPage.passwordInputFill(passwordWithSpace);

    await loginPage.loginButtonClick();

    await expect(loginPage.loginErrorMessage).toContainText(
      'Warning: No match for E-Mail Address and/or Password.'
    );
  });
});
