import { z } from 'zod';
import { PersonWhereInputObjectSchema } from './objects/PersonWhereInput.schema';
import { PersonOrderByWithRelationInputObjectSchema } from './objects/PersonOrderByWithRelationInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './objects/PersonWhereUniqueInput.schema';
import { PersonScalarFieldEnumSchema } from './enums/PersonScalarFieldEnum.schema';

export const PersonFindFirstSchema = z.object({
  where: PersonWhereInputObjectSchema.optional(),
  orderBy: PersonOrderByWithRelationInputObjectSchema.optional(),
  cursor: PersonWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PersonScalarFieldEnumSchema).optional(),
});
