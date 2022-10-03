import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'password',
  'displayname',
  'provider',
  'genderId',
  'createdAt',
  'updatedAt',
  'isActive',
]);
