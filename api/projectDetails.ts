import { ProjectDto, ProjectTeamDetails } from '../../src/app/modules/projects/models';

const { faker } = require('@faker-js/faker');

export const projectDetails: ProjectDto[] = [];

const teamDetails: ProjectTeamDetails[] = [
  { role: 'Project Lead Marketing', name: faker.name.fullName() },
  { role: 'Project Key Account Manager', name: faker.name.fullName() },
  { role: 'Project Distribution Bvm', name: faker.name.fullName() },
  { role: 'Project Marketing Bvm', name: faker.name.fullName() },
  { role: 'Program Manager', name: faker.name.fullName() },
];

for (let i = 0; i < 50; i++) {
  projectDetails.push({
    id: faker.datatype.uuid(),
    projectTeamDetails: teamDetails,
    projectDetails: {
      subProjectId: faker.datatype.number(2, 1000),
      projectName: faker.address.cityName() + faker.helpers.arrayElement(['North', 'West', 'South', 'East']),
      projectLead: faker.name.fullName(),
      gateStatus: faker.helpers.arrayElement(['G1', 'G2', 'G3']),
      region: faker.helpers.arrayElement(['North', 'West', 'South', 'East']),
      federalState: faker.address.cityName(),
      ags8: faker.datatype.number(10000, 99999),
      contribution: faker.datatype.string(5),
      expansion: 'Eigenwirtschaftlich',
      g2VvmQuotePlan: faker.helpers.arrayElement(['10%', '20%', '30%', '40%', '50%', '60%']),
      g2VvmQuoteIst: faker.helpers.arrayElement(['10%', '20%', '30%', '40%', '50%', '60%']),
      g3VvmQuotePlan: faker.helpers.arrayElement(['10%', '20%', '30%', '40%', '50%', '60%']),
      g3VvmQuoteIst: faker.helpers.arrayElement(['10%', '20%', '30%', '40%', '50%', '60%']),
      g4VvmQuotePlan: faker.helpers.arrayElement(['10%', '20%', '30%', '40%', '50%', '60%']),
      g4VvmQuoteIst: faker.helpers.arrayElement(['10%', '20%', '30%', '40%', '50%', '60%']),
    },
  });
}
