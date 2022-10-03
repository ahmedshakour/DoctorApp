import { z } from 'zod';
import { GenderCreateManyInputObjectSchema } from './objects/GenderCreateManyInput.schema';

export const GenderCreateManySchema = z.object({
  data: GenderCreateManyInputObjectSchema,
});
