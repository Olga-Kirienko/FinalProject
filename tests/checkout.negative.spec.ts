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
