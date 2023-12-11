import { ProjectTableEntry } from '../../src/app/modules/projects/models';
import { projectDetails } from './projectDetails';
import { faker } from '@faker-js/faker';

export const projects: ProjectTableEntry[] = [];

projectDetails.forEach(project => {
  projects.push({
    id: project.id,
    subProjectId: project.projectDetails.subProjectId,
    projectName: project.projectDetails.projectName,
    gateStatus: faker.helpers.arrayElement(['Status1', 'Status2', 'Status3']),
    region: project.projectDetails.region,
    city: project.projectDetails.federalState,
    projectManager: project.projectDetails.projectLead,
    projectStart: '2022-11-12T09:57:59.102Z',
    projectEnd: '2023-11-12T09:57:59.102Z',
    addressPointsCount: 1,
    apartmentUnitsCount: 1,
    ordersCount: 1,
  });
});
