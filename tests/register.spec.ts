import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { createRandomUser } from '../factory/userFactory';

test.use({ storageState: { cookies: [], origins: [] } });

test('Successful registration', async ({ page }) => {
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

  await expect(page).toHaveURL(
    'http://opencart.abstracta.us/index.php?route=account/success'
  );
  await expect(registerPage.successMessage).toBeVisible();
});
