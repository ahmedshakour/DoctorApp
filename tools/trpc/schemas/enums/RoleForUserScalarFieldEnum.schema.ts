import { z } from 'zod';

export const RoleForUserScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'roleId',
  'createdAt',
  'updatedAt',
  'isActive',
]);
