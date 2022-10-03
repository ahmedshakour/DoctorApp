import { z } from 'zod';
import { PersonCreateInputObjectSchema } from './objects/PersonCreateInput.schema';

export const PersonCreateOneSchema = z.object({
  data: PersonCreateInputObjectSchema,
});
