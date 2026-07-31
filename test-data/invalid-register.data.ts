import { RegisterNegativeCase } from '../types/RegisterNegativeCase';

export const invalidRegisterCases: RegisterNegativeCase[] = [
  {
    description: 'Empty First Name field',
    overrides: { firstName: '' },
    expectedError: 'First Name must be between 1 and 32 characters!',
  },
  {
    description: 'Invalid Email',
    overrides: { email: 'miaow@testcom' },
    expectedError: 'E-Mail Address does not appear to be valid!',
  },
  {
    description: 'Too short telephone',
    overrides: { telephone: '21' },
    expectedError: 'Telephone must be between 3 and 32 characters!',
  },
  {
    description: 'Not checked Privacy Policy checkbox',
    overrides: {},
    expectedError: 'Warning: You must agree to the Privacy Policy!',
  },
  {
    description: "Passwords don't coincide",
    overrides: { password: 'dododo' },
    passwordConfirmOverride: 'popopo',
    expectedError: 'Password confirmation does not match password!',
  },
];
