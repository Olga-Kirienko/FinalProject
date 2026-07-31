import { type Page } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { ProductPage } from '../pages/ProductPage';
import { CartItem } from '../types/CartItem';
import { Header } from '../components/Header';
import { CheckoutOptions } from '../types/CheckoutOptions';
import { CheckoutPage } from '../pages/CheckoutPage';
import { createRandomAddress } from '../factory/addressFactory';
import { OrderSummary } from '../types/OrderSummary';

export class PurchaseFacade {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addProductsToCart(products: CartItem[]): Promise<void> {
    await this.page.route('**/addthis_widget.js', (route) => route.abort());
    const productPage = new ProductPage(this.page);
    const header = new Header(this.page);
    const cartPage = new CartPage(this.page);

    for (const item of products) {
      await this.page.goto(
        `/index.php?route=product/product&product_id=${item.productId}`
      );

      await productPage.addToCart();
    }

    await header.goToCart();

    for (const item of products) {
      if (item.quantity > 1) {
        await cartPage
          .getQuantityInput(item.productName)
          .fill(item.quantity.toString());
        await cartPage.getUpdateButton(item.productName).click();
      }
    }
  }

  async completeCheckout(options: CheckoutOptions): Promise<OrderSummary> {
    const checkoutPage = new CheckoutPage(this.page);
    const header = new Header(this.page);
    const address = createRandomAddress();
    const billingDetails = checkoutPage.getBillingDetails();
    const deliveryDetails = checkoutPage.getDeliveryDetails();
    const deliveryMethod = checkoutPage.getDeliveryMethod();
    const paymentMethod = checkoutPage.getPaymentMethod();
    const confirmOrder = checkoutPage.getConfirmOrder();

    await this.addProductsToCart(options.products);
    await header.goToCheckout();

    // --- Billing Details ---
    await billingDetails.selectNewAddress();
    await billingDetails.fillFirstName(address.firstName);
    await billingDetails.fillLastName(address.lastName);
    await billingDetails.fillAddress1(address.address1);
    await billingDetails.fillCity(address.city);
    await billingDetails.selectCountry(address.country);
    await billingDetails.selectRegion(address.region);

    const billingSavedPromise = this.page.waitForResponse(
      (response) =>
        response.url().includes('route=checkout/payment_address/save') &&
        response.status() === 200
    );
    await billingDetails.clickContinue();
    await billingSavedPromise;

    // --- Delivery Details ---
    await deliveryDetails.selectNewAddress();
    await deliveryDetails.fillFirstName(address.firstName);
    await deliveryDetails.fillLastName(address.lastName);
    await deliveryDetails.fillAddress1(address.address1);
    await deliveryDetails.fillCity(address.city);
    await deliveryDetails.selectCountry(address.country);
    await deliveryDetails.selectRegion(address.region);

    const deliverySavedPromise = this.page.waitForResponse(
      (response) =>
        response.url().includes('route=checkout/shipping_address/save') &&
        response.status() === 200
    );
    await deliveryDetails.clickContinue();
    await deliverySavedPromise;

    // --- Delivery Method ---
    if (options.comment) {
      await deliveryMethod.fillOrderComment(options.comment);
    }

    const deliveryMethodSavedPromise = this.page.waitForResponse(
      (response) =>
        response.url().includes('route=checkout/shipping_method/save') &&
        response.status() === 200
    );
    await deliveryMethod.clickContinue();
    await deliveryMethodSavedPromise;

    // --- Payment Method ---
    await paymentMethod.selectPaymentMethod(options.paymentMethod);
    if (options.comment) {
      await paymentMethod.fillOrderComment(options.comment);
    }
    await paymentMethod.acceptTermsAndConditions();

    const paymentMethodSavedPromise = this.page.waitForResponse(
      (response) =>
        response.url().includes('route=checkout/payment_method/save') &&
        response.status() === 200
    );
    const confirmResponsePromise = this.page.waitForResponse(
      (response) =>
        response.url().includes('route=checkout/confirm') &&
        response.status() === 200
    );

    await paymentMethod.clickContinue();
    await paymentMethodSavedPromise;
    await confirmResponsePromise;

    const orderSummary: OrderSummary = {
      lineItems: await confirmOrder.getLineItems(),
      subtotal: await confirmOrder.getSubTotalSum(),
      shipping: await confirmOrder.getShippingValue(),
      total: await confirmOrder.getTotalSum(),
    };
    await confirmOrder.confirmOrder();
    return orderSummary;
  }
}
