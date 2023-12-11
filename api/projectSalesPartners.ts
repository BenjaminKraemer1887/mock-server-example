import { PartnerDetails } from '../../src/app/modules/projects/models';

const { faker } = require('@faker-js/faker');

export const projectSalesPartners: PartnerDetails[] = [];

for (let i = 0; i < 3; i++) {
  projectSalesPartners.push({
    id: faker.datatype.uuid(),
    companyName: faker.name.fullName(),
    validFrom: '2023-04-19T09:57:59.102Z',
    validUntil: '2024-04-24T09:57:59.102Z',
    validInGate: faker.helpers.arrayElement(['G1', 'G2', 'G3']),
    status: faker.helpers.arrayElement(['Aktiv', 'Inaktiv']),
  });
}
