import { z } from 'zod';
import { GenderWhereUniqueInputObjectSchema } from './objects/GenderWhereUniqueInput.schema';
import { GenderCreateInputObjectSchema } from './objects/GenderCreateInput.schema';
import { GenderUpdateInputObjectSchema } from './objects/GenderUpdateInput.schema';

export const GenderUpsertSchema = z.object({
  where: GenderWhereUniqueInputObjectSchema,
  create: GenderCreateInputObjectSchema,
  update: GenderUpdateInputObjectSchema,
});
