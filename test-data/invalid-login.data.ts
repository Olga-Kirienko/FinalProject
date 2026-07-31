import { LoginNegativeCase } from '../types/LoginNegativeCase';

export const invalidLoginCases: LoginNegativeCase[] = [
  {
    description: 'Empty E-Mail Address',
    overrides: { email: '' },
  },
  {
    description: 'Empty Password',
    overrides: { password: '' },
  },
  {
    description: 'Invalid E-Mail Address',
    overrides: { email: 'invalid_mail@test.com' },
  },
  {
    description: 'Invalid Password',
    overrides: { password: 'invalidpassword' },
  },
  {
    description: 'Empty E-Mail Address and Password',
    overrides: { email: '', password: '' },
  },
];
