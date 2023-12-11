import { AddressSuggestion } from '../../src/app/modules/orders/models/order-address-suggestion.dto';

const { faker } = require('@faker-js/faker');

export const addressSuggestions: AddressSuggestion[] = [];

for (let i = 0; i < 5; i++) {
  addressSuggestions.push({
    street: faker.address.street(),
    postalCode: faker.address.zipCode(),
    city: faker.address.cityName(),
  });
}
