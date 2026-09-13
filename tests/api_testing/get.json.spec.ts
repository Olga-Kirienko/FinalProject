import { test, expect } from '@playwright/test';

test('GET request for country list returns valid JSON', async ({ request }) => {
  const response = await request.get(
    'https://opencart.abstracta.us/index.php?route=extension/total/shipping/country&country_id=222'
  );

  expect(response.status()).toBe(200);

  const country = await response.json();

  // checking body is an object
  expect(typeof country).toBe('object');

  // checking key fields
  expect(country).toHaveProperty('country_id', '222');
  expect(country).toHaveProperty('name', 'United Kingdom');
  expect(country).toHaveProperty('iso_code_2', 'GB');

  // checking array 'zone'
  expect(Array.isArray(country.zone)).toBe(true);
  expect(country.zone.length).toBeGreaterThan(0);

  // checking structure of 'zone'
  expect(country.zone[0]).toHaveProperty('zone_id');
  expect(country.zone[0]).toHaveProperty('name');
});
