import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import { LoginPage } from '../pages/LoginPage';

test.use({ storageState: { cookies: [], origins: [] } });

test('Successful login', async ({ page }) => {
  const { email, password } = JSON.parse(
    fs.readFileSync('.auth/existing-user.json', 'utf-8')
  );
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.emailAddressInputFill(email);
  await loginPage.passwordInputFill(password);
  await loginPage.loginButtonClick();

  await expect(page).toHaveURL('/index.php?route=account/account');
});
