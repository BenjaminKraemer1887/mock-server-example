const { faker } = require('@faker-js/faker');
import { PartnerDto } from '../../src/app/modules/partners/models';

export const partnerDetails: PartnerDto[] = [];
for (let i = 0; i < 100; i++) {
  partnerDetails.push({
    id: faker.datatype.uuid(),
    partnerId: 123456,
    partnerIdOld: 123456,
    companyName: faker.company.name(),
    companyNameAdditional: faker.company.name(),
    partnerType: faker.helpers.arrayElement(['salesPartner', 'storePartner', 'callCenter']),
    partnerLegalForm: 'GmbH',
    street: faker.address.street(),
    houseNumber: faker.address.buildingNumber(),
    houseSuffix: '',
    postalCode: faker.address.zipCode(),
    city: faker.address.cityName(),
    phone: {
      areaCode: '+49',
      number: faker.phone.number('30 #######'),
    },
    mobile: {
      areaCode: '+49',
      number: faker.phone.number('157 ### ## ###'),
    },
    fax: {
      areaCode: '+49',
      number: faker.phone.number('30 #######'),
    },
    email: faker.internet.email(),
    additionalEmail: faker.internet.email(),
    homepage: faker.internet.url(),
    validFrom: '2023-03-18T09:57:59.102Z',
    validTo: '2024-03-24T09:57:59.102Z',
    commercialRegister: 'HRB ' + faker.datatype.number({ min: 10000, max: 19999 }),
    iban: faker.finance.iban(true, 'DE'),
    vatLiability: true,
    taxId: faker.datatype.number({ min: 1000000, max: 1999999 }),
    projects: [
      {
        projectName: 'Hamburg Süd',
        projectID: faker.datatype.number({ min: 100, max: 200 }),
        subprojectID: faker.datatype.number({ min: 100, max: 200 }),
      },
      {
        projectName: 'Hamburg Nord',
        projectID: faker.datatype.number({ min: 100, max: 200 }),
        subprojectID: faker.datatype.number({ min: 100, max: 200 }),
      },
    ],
    createdBy: faker.name.fullName(),
    created: '2022-09-12T09:57:59.102Z',
    modified: '2022-09-14T09:57:59.102Z',
    modifiedBy: faker.datatype.number({ min: 1000000, max: 1999999 }),
    active: faker.datatype.boolean(),
  });
}
