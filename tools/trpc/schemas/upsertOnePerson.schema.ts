import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './objects/PersonWhereUniqueInput.schema';
import { PersonCreateInputObjectSchema } from './objects/PersonCreateInput.schema';
import { PersonUpdateInputObjectSchema } from './objects/PersonUpdateInput.schema';

export const PersonUpsertSchema = z.object({
  where: PersonWhereUniqueInputObjectSchema,
  create: PersonCreateInputObjectSchema,
  update: PersonUpdateInputObjectSchema,
});
