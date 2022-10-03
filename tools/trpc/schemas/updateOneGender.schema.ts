import { z } from 'zod';
import { GenderUpdateInputObjectSchema } from './objects/GenderUpdateInput.schema';
import { GenderWhereUniqueInputObjectSchema } from './objects/GenderWhereUniqueInput.schema';

export const GenderUpdateOneSchema = z.object({
  data: GenderUpdateInputObjectSchema,
  where: GenderWhereUniqueInputObjectSchema,
});
