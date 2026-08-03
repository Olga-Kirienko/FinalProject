import { test, expect } from '@playwright/test';
import { PurchaseFacade } from '../facade/PurchaseFacade';
import { CheckoutPage } from '../pages/CheckoutPage';
import { Header } from '../components/Header';
import { existingProducts } from '../test-data/existing-products.data';
import { createRandomAddress } from '../factory/addressFactory';
import { invalidCheckoutAddressCases } from '../test-data/invalid-checkout-address.data';

test.describe('Checkout negative cases — required billing fields', () => {
  for (const testCase of invalidCheckoutAddressCases) {
    test(testCase.description, async ({ page }) => {
      test.setTimeout(60000);

      const facade = new PurchaseFacade(page);
      const header = new Header(page);
      const checkoutPage = new CheckoutPage(page);
      const billingDetails = checkoutPage.getBillingDetails();

      const address = { ...createRandomAddress(), ...testCase.overrides };

      await facade.addProductsToCart([
        {
          productId: existingProducts.imac.id,
          productName: existingProducts.imac.product,
          quantity: 1,
        },
      ]);
      await header.goToCheckout();

      await billingDetails.selectNewAddress();
      await billingDetails.fillFirstName(address.firstName);
      await billingDetails.fillLastName(address.lastName);
      await billingDetails.fillAddress1(address.address1);
      await billingDetails.fillCity(address.city);
      await billingDetails.selectCountry(address.country);
      await billingDetails.selectRegion(address.region);

      await billingDetails.clickContinue();

      await expect(page.getByText(testCase.expectedError)).toBeVisible();
    });
  }
});

test.describe('Checkout negative cases — Country / Region selects', () => {
  test('Checkout is blocked when Country is not selected', async ({ page }) => {
    test.setTimeout(60000);

    const facade = new PurchaseFacade(page);
    const header = new Header(page);
    const checkoutPage = new CheckoutPage(page);
    const billingDetails = checkoutPage.getBillingDetails();
    const address = createRandomAddress();

    await facade.addProductsToCart([
      {
        productId: existingProducts.imac.id,
        productName: existingProducts.imac.product,
        quantity: 1,
      },
    ]);
    await header.goToCheckout();

    await billingDetails.selectNewAddress();
    await billingDetails.fillFirstName(address.firstName);
    await billingDetails.fillLastName(address.lastName);
    await billingDetails.fillAddress1(address.address1);
    await billingDetails.fillCity(address.city);

    // United Kingdom is default, so we change it to --- Please Select ---
    await billingDetails.selectCountry('--- Please Select ---');

    await billingDetails.clickContinue();

    await expect(page.getByText('Please select a country!')).toBeVisible();
  });

  test.fixme('Checkout is blocked when Region/State is not selected', async ({
    page,
  }) => {
    test.setTimeout(60000);

    const facade = new PurchaseFacade(page);
    const header = new Header(page);
    const checkoutPage = new CheckoutPage(page);
    const billingDetails = checkoutPage.getBillingDetails();

    const address = createRandomAddress();

    await facade.addProductsToCart([
      {
        productId: existingProducts.imac.id,
        productName: existingProducts.imac.product,
        quantity: 1,
      },
    ]);
    await header.goToCheckout();

    await billingDetails.selectNewAddress();
    await billingDetails.fillFirstName(address.firstName);
    await billingDetails.fillLastName(address.lastName);
    await billingDetails.fillAddress1(address.address1);
    await billingDetails.fillCity(address.city);
    await billingDetails.selectCountry(address.country);

    await billingDetails.clickContinue();

    await expect(
      page.getByText('Please select a region / state!')
    ).toBeVisible();
  });
});

test('Checkout is blocked when Terms and Conditions is not accepted', async ({
  page,
}) => {
  test.setTimeout(60000);

  const facade = new PurchaseFacade(page);
  const header = new Header(page);
  const checkoutPage = new CheckoutPage(page);
  const billingDetails = checkoutPage.getBillingDetails();
  const deliveryDetails = checkoutPage.getDeliveryDetails();
  const deliveryMethod = checkoutPage.getDeliveryMethod();
  const paymentMethod = checkoutPage.getPaymentMethod();

  const address = createRandomAddress();

  await facade.addProductsToCart([
    {
      productId: existingProducts.imac.id,
      productName: existingProducts.imac.product,
      quantity: 1,
    },
  ]);
  await header.goToCheckout();

  // --- Billing Details ---
  await billingDetails.selectNewAddress();
  await billingDetails.fillFirstName(address.firstName);
  await billingDetails.fillLastName(address.lastName);
  await billingDetails.fillAddress1(address.address1);
  await billingDetails.fillCity(address.city);
  await billingDetails.selectCountry(address.country);
  await billingDetails.selectRegion(address.region);
  await billingDetails.clickContinue();

  // --- Delivery Details ---
  await deliveryDetails.selectNewAddress();
  await deliveryDetails.fillFirstName(address.firstName);
  await deliveryDetails.fillLastName(address.lastName);
  await deliveryDetails.fillAddress1(address.address1);
  await deliveryDetails.fillCity(address.city);
  await deliveryDetails.selectCountry(address.country);
  await deliveryDetails.selectRegion(address.region);
  await deliveryDetails.clickContinue();

  // --- Delivery Method ---
  await deliveryMethod.clickContinue();

  // --- Payment Method ---
  await paymentMethod.selectPaymentMethod('Cash On Delivery');

  // Terms & Conditions aren't checked intentionally
  await paymentMethod.clickContinue();

  await expect(
    page.getByText('Warning: You must agree to the Terms & Conditions!')
  ).toBeVisible();
});
