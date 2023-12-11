import { PartnerDetails } from '../../src/app/modules/projects/models';

const { faker } = require('@faker-js/faker');

export const projectStorePartners: PartnerDetails[] = [];

for (let i = 0; i < 3; i++) {
  projectStorePartners.push({
    id: faker.datatype.uuid(),
    companyName: faker.name.fullName(),
    validFrom: '2023-04-18T09:57:59.102Z',
    validUntil: '2024-04-24T09:57:59.102Z',
    validInGate: faker.helpers.arrayElement(['G1', 'G2', 'G3']),
    status: faker.helpers.arrayElement(['Aktiv', 'Inaktiv']),
  });
}
