import { OrderAddressTableEntry } from '../../src/app/modules/orders/models/order-address-table-entry.dto';
import { addressSuggestions } from './addressSuggestion';
import { TernaryStateEnum } from '../../src/app/enums/ternary-state.enum';

const { faker } = require('@faker-js/faker');

export const orderAddressTableEntries: OrderAddressTableEntry[] = [];

addressSuggestions.forEach(address => {
  orderAddressTableEntries.push({
    id: faker.datatype.uuid(),
    street: address.street,
    houseNumber: faker.address.buildingNumber(),
    houseSuffix: faker.datatype.number(),
    houseNumberFull: null,
    postalCode: address.postalCode,
    city: address.city,
    state: faker.helpers.arrayElement(['Hamburg', 'Berlin']),
    expansionStatus: faker.helpers.arrayElement([
      TernaryStateEnum.true,
      TernaryStateEnum.false,
      TernaryStateEnum.undefined,
    ]),
    assigned: faker.helpers.arrayElement([TernaryStateEnum.true, TernaryStateEnum.false, TernaryStateEnum.undefined]),
  });
});
