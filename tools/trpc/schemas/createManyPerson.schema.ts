import { z } from 'zod';
import { PersonCreateManyInputObjectSchema } from './objects/PersonCreateManyInput.schema';

export const PersonCreateManySchema = z.object({
  data: PersonCreateManyInputObjectSchema,
});
