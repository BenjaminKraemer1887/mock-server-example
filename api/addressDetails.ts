import { AddressDto } from '../../src/app/modules/addresses/models';
import { TernaryStateEnum } from '../../src/app/enums/ternary-state.enum';

const { faker } = require('@faker-js/faker');

export const addressDetails: AddressDto[] = [];

for (let i = 0; i < 100; i++) {
  addressDetails.push({
    id: faker.datatype.uuid(),
    infasId: 1,
    konzeptumId: '1001178',
    subProjectId: '178',
    marketingPhase: 1,
    partnerId: '1',
    userId: '1',
    street: faker.address.street(),
    houseNumber: faker.address.buildingNumber(),
    postalCode: faker.address.zipCode(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    owner: faker.company.name(),
    ownerContactPerson: faker.name.fullName(),
    ownerTelephoneNumber: faker.phone.number(),
    ownerEmail: faker.internet.email(),
    administration: 'Hausverwaltung Richter GmbH',
    administrationContactPerson: 'Jens Maier',
    administrationTelephoneNumber: '040/456789',
    administrationEmail: 'maler@hausverwaltung-richter.de',
    apartmentUnitsCount: 5,
    buildingType: 'Mehrfamilienhaus',
    wowiFlag: faker.helpers.arrayElement([TernaryStateEnum.true, TernaryStateEnum.false, TernaryStateEnum.undefined]),
    ggnvFlag: faker.helpers.arrayElement([TernaryStateEnum.true, TernaryStateEnum.false, TernaryStateEnum.undefined]),
  });
}
