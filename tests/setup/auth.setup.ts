import { test as setup, expect } from '@playwright/test';
import { createRandomUser } from '../../factory/userFactory';
import { RegisterPage } from '../../pages/RegisterPage';
import * as fs from 'fs';

const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {
  const user = createRandomUser();

  const registerPage = new RegisterPage(page);
  await registerPage.goto();

  await registerPage.firstNameInputFill(user.firstName);
  await registerPage.lastNameInputFill(user.lastName);
  await registerPage.emailInputFill(user.email);
  await registerPage.telephoneInputFill(user.telephone);
  await registerPage.passwordInputFill(user.password);
  await registerPage.passwordConfirmInputFill(user.password);
  await registerPage.checkPrivacyPolicy();
  await registerPage.continueButtonClick();

  await page.getByTitle('My Account').click();
  /* This assertion is placed here intentionally.
If it fails, one knows right away instead of all tests fail later
*/
  await expect(
    page.locator('#top-links').getByRole('link', { name: 'Logout' })
  ).toBeVisible();

  await page.context().storageState({ path: authFile });

  fs.writeFileSync(
    '.auth/existing-user.json',
    JSON.stringify({ email: user.email, password: user.password })
  );
});
