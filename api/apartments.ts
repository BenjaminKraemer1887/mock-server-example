import {ApartmentUnit} from '../../src/app/modules/addresses/models';

const { faker } = require('@faker-js/faker');

export const apartments: ApartmentUnit[] = [];

for (let i = 0; i < 100; i++) {
  apartments.push({
    id: faker.datatype.uuid(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    floor: faker.datatype.number(20).toString(),
    status: faker.helpers.arrayElement(['VZF Offen', 'Erstellt', 'VZF Bestätigt', 'VZF Abgelehnt', 'Fehler', 'Übertragen', 'Storno', 'Clearing']),
    statusDate: faker.datatype.datetime(),
  })
}
