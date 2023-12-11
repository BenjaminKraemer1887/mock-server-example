import { AddressTableEntryDto } from '../../src/app/modules/addresses/models';
import { addressDetails } from './addressDetails';
import { faker } from '@faker-js/faker';

export const addresses: AddressTableEntryDto[] = [];

addressDetails.forEach(address => {
  addresses.push({
    id: address.id,
    infasId: faker.datatype.number(),
    konzeptumId: '1001178',
    subProjectId: faker.datatype.number(),
    street: address.street,
    postalCode: address.postalCode,
    city: address.city,
    houseNumber: address.houseNumber,
    marketingPhase: 1,
    salesPartner: faker.helpers.arrayElement([1, 2, 3, 4, 5, 6, 7, 8]).toString(),
    numberApartmentUnits: 1,
    user: '',
    userName: faker.name.fullName(),
  });
});
