import { z } from 'zod';

export const PersonScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'phone',
  'address',
  'dateOfbirthday',
  'genderId',
  'createdAt',
  'updatedAt',
  'isActive',
]);
