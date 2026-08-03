import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import { RegisterPage } from '../pages/RegisterPage';
import { invalidRegisterCases } from '../test-data/invalid-register.data';
import { createRandomUser } from '../factory/userFactory';

test.describe('Registration negative cases', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  for (const testCase of invalidRegisterCases) {
    test(testCase.description, async ({ page }) => {
      //создаёт валидного юзера, а затем поверх него накладывает испорченное поле из testCase.overrides
      const user = { ...createRandomUser(), ...testCase.overrides };
      const registerPage = new RegisterPage(page);

      await registerPage.goto();
      await registerPage.firstNameInputFill(user.firstName);
      await registerPage.lastNameInputFill(user.lastName);
      await registerPage.emailInputFill(user.email);
      await registerPage.telephoneInputFill(user.telephone);
      await registerPage.passwordInputFill(user.password);
      await registerPage.passwordConfirmInputFill(
        testCase.passwordConfirmOverride ?? user.password
      );
      if (testCase.description !== 'Not checked Privacy Policy checkbox') {
        await registerPage.checkPrivacyPolicy();
      }
      await registerPage.continueButtonClick();

      await expect(page.getByText(testCase.expectedError)).toBeVisible();
    });
  }

  test('Registration with already existing email', async ({ page }) => {

    const existingUser = JSON.parse(
      fs.readFileSync('.auth/existing-user.json', 'utf-8')
    );
    const user = { ...createRandomUser(), email: existingUser.email };
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

    await expect(
      page.getByText('Warning: E-Mail Address is already registered!')
    ).toBeVisible();
  });
});
