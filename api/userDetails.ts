import { UserDto } from '../../src/app/modules/users/models';

const { faker } = require('@faker-js/faker');

export const userDetails: UserDto[] = [];

for (let i = 0; i < 100; i++) {
  userDetails.push({
    id: faker.datatype.uuid(),
    userId: faker.datatype.string(),
    salutation: faker.name.prefix(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    street: faker.address.street(),
    houseNumber: faker.address.buildingNumber(),
    houseSuffix: '',
    postalCode: faker.address.zipCode(),
    city: faker.address.cityName(),
    userRole: 'Nutzerrolle',
    username: faker.internet.userName(),
    systemLanguage: 'Deutsch',
    phone: {
      areaCode: '',
      number: faker.phone.number('91 ### ## ##'),
    },
    mobile: {
      areaCode: '',
      number: faker.phone.number('91 ### ## ##'),
    },
    email: faker.internet.email(),
    fax: {
      areaCode: '',
      number: faker.phone.number('91 ### ## ##'),
    },
    website: faker.internet.url(),
    validFrom: faker.datatype.datetime(),
    validTo: faker.datatype.datetime(),
    companyName: faker.name.fullName(),
    createdBy: faker.name.fullName(),
    created: faker.datatype.datetime(),
    modified: faker.datatype.datetime(),
    modifiedBy: faker.datatype.number(),
    active: faker.datatype.boolean(),
  });
}
