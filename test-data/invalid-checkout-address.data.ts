import { CheckoutAddressNegativeCase } from '../types/CheckoutAddressNegativeCase';

export const invalidCheckoutAddressCases: CheckoutAddressNegativeCase[] = [
  {
    description: 'Empty First Name field',
    overrides: { firstName: '' },
    expectedError: 'First Name must be between 1 and 32 characters!',
  },
  {
    description: 'Empty Last Name field',
    overrides: { lastName: '' },
    expectedError: 'Last Name must be between 1 and 32 characters!',
  },
  {
    description: 'Empty Address 1 field',
    overrides: { address1: '' },
    expectedError: 'Address 1 must be between 3 and 128 characters!',
  },
  {
    description: 'Empty City field',
    overrides: { city: '' },
    expectedError: 'City must be between 2 and 128 characters!',
  },
];
