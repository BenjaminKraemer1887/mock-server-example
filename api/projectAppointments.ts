import { ProjectAppointment } from '../../src/app/modules/projects/models';

const { faker } = require('@faker-js/faker');

export const projectAppointments: ProjectAppointment[] = [];

for (let i = 0; i < 7; i++) {
  projectAppointments.push({
    id: faker.datatype.uuid(),
    category: faker.helpers.arrayElement(['Ladenlokal', 'GFA VVM Real Plandaten', 'D3D-BVM 1. Verlängerung']),
    startTime: '2023-05-02T09:57:59.102Z',
    endTime: '2024-04-24T09:57:59.102Z',
    status: faker.helpers.arrayElement(['Open', 'Closed']),
  });
}
