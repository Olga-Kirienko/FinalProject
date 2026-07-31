import { fixedAddressData } from '../test-data/fixed-address.data';
import { faker } from '@faker-js/faker';
import { Address } from '../types/Address';

export function createRandomAddress(): Address {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    postcode: faker.location.zipCode(),
    country: fixedAddressData.country,
    region: fixedAddressData.region,
  };
}
