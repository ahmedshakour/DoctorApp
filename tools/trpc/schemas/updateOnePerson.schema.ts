import { z } from 'zod';
import { PersonUpdateInputObjectSchema } from './objects/PersonUpdateInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './objects/PersonWhereUniqueInput.schema';

export const PersonUpdateOneSchema = z.object({
  data: PersonUpdateInputObjectSchema,
  where: PersonWhereUniqueInputObjectSchema,
});
