import { z } from 'zod';
import { PersonWhereInputObjectSchema } from './objects/PersonWhereInput.schema';
import { PersonOrderByWithRelationInputObjectSchema } from './objects/PersonOrderByWithRelationInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './objects/PersonWhereUniqueInput.schema';

export const PersonAggregateSchema = z.object({
  where: PersonWhereInputObjectSchema.optional(),
  orderBy: PersonOrderByWithRelationInputObjectSchema.optional(),
  cursor: PersonWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
