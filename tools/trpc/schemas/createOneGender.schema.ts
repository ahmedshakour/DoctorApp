import { z } from 'zod';
import { GenderCreateInputObjectSchema } from './objects/GenderCreateInput.schema';

export const GenderCreateOneSchema = z.object({
  data: GenderCreateInputObjectSchema,
});
