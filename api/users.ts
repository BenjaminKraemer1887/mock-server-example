import { UsersTableEntryDto } from '../../src/app/modules/users/models';
import { userDetails } from './userDetails';

export const users: UsersTableEntryDto[] = [];
userDetails.forEach(user => {
  users.push({
    id: user.id,
    userId: user.userId,
    companyName: user.companyName,
    firstname: user.firstname,
    lastname: user.lastname,
    roles: user.userRole,
    active: user.active,
  });
});
