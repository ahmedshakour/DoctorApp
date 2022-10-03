import { z } from 'zod';
import { GenderWhereInputObjectSchema } from './objects/GenderWhereInput.schema';
import { GenderOrderByWithRelationInputObjectSchema } from './objects/GenderOrderByWithRelationInput.schema';
import { GenderWhereUniqueInputObjectSchema } from './objects/GenderWhereUniqueInput.schema';
import { GenderScalarFieldEnumSchema } from './enums/GenderScalarFieldEnum.schema';

export const GenderFindFirstSchema = z.object({
  where: GenderWhereInputObjectSchema.optional(),
  orderBy: GenderOrderByWithRelationInputObjectSchema.optional(),
  cursor: GenderWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(GenderScalarFieldEnumSchema).optional(),
});
