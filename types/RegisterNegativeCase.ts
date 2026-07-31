import { User } from './User';

export interface RegisterNegativeCase {
  description: string;
  overrides: Partial<User>;
  passwordConfirmOverride?: string;
  expectedError: string;
}
