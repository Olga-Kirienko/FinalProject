import { test, expect } from '@playwright/test';

test('login with valid credentials creates a session and grants access to the account', async ({
  request,
}) => {
  const loginResponse = await request.post(
    'https://opencart.abstracta.us/index.php?route=account/login',
    // Login credentials sent as multipart/form-data, matching OpenCart's expected field names
    {
      multipart: {
        email: process.env.TEST_EMAIL!,
        password: process.env.TEST_PASSWORD!,
      },
    }
  );
  // Confirm the login request itself succeeded (status in the 200-299 range)
  expect(loginResponse.ok()).toBeTruthy();
  // Grab all cookies (and other state) accumulated by this request context so far
  const state = await request.storageState();
  // Look for the OpenCart session cookie among all stored cookies
  const sessionCookie = state.cookies.find((c) => c.name === 'OCSESSID');
  // Confirm the session cookie was actually found (i.e. the server created a session)
  expect(sessionCookie).toBeDefined();

  const accountResponse = await request.get(
    'https://opencart.abstracta.us/index.php?route=account/account'
  );
  expect(accountResponse.url()).toContain('route=account/account');
});
