import { z } from 'zod';

export const GenderScalarFieldEnumSchema = z.enum([
  'id',
  'type',
  'createdAt',
  'updatedAt',
  'isActive',
]);
