import { Address } from './Address';

export interface CheckoutAddressNegativeCase {
  description: string;
  overrides: Partial<Address>;
  expectedError: string;
}
