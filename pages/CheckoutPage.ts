import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { AddressDetailsComponent } from '../components/checkout/AddressDetailsComponent';
import { DeliveryMethodComponent } from '../components/checkout/DeliveryMethodComponent';
import { PaymentMethodComponent } from '../components/checkout/PaymentMethodComponent';
import { ConfirmOrderComponent } from '../components/checkout/ConfirmOrderComponent';
import { OrderSuccessComponent } from '../components/checkout/OrderSuccessComponent';

export class CheckoutPage extends BasePage {
  readonly billingSection: Locator;
  readonly deliverySection: Locator;
  readonly deliveryMethodSection: Locator;
  readonly paymentMethodSection: Locator;
  readonly confirmOrderSection: Locator;

  constructor(page: Page) {
    super(page);
    this.billingSection = page
      .locator('div.panel')
      .filter({ hasText: 'Billing Details' });
    this.deliverySection = page
      .locator('div.panel')
      .filter({ hasText: 'Delivery Details' });
    this.deliveryMethodSection = page
      .locator('div.panel')
      .filter({ hasText: 'Delivery Method' });
    this.paymentMethodSection = page
      .locator('div.panel')
      .filter({ hasText: 'Payment Method' });
    this.confirmOrderSection = page
      .locator('div.panel')
      .filter({ hasText: 'Confirm Order' });
  }

  getBillingDetails(): AddressDetailsComponent {
    return new AddressDetailsComponent(this.billingSection);
  }

  getDeliveryDetails(): AddressDetailsComponent {
    return new AddressDetailsComponent(this.deliverySection);
  }

  getDeliveryMethod(): DeliveryMethodComponent {
    return new DeliveryMethodComponent(this.deliveryMethodSection);
  }

  getPaymentMethod(): PaymentMethodComponent {
    return new PaymentMethodComponent(this.paymentMethodSection);
  }

  getConfirmOrder(): ConfirmOrderComponent {
    return new ConfirmOrderComponent(this.confirmOrderSection);
  }

  getOrderSuccess(): OrderSuccessComponent {
    return new OrderSuccessComponent(this.page);
  }
}
