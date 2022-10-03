import { z } from 'zod';

export const ReceiptScalarFieldEnumSchema = z.enum([
  'id',
  'drug',
  'name',
  'dose',
  'freq',
  'route',
  'note',
  'userId',
  'personId',
  'createdAt',
  'updatedAt',
  'isActive',
]);
