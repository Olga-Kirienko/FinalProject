import { faker } from '@faker-js/faker';
import { User } from '../types/User';

export function createRandomUser(): User {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    telephone: faker.phone.number(),
    password: faker.internet.password({ length: 10 }),
  };
}
