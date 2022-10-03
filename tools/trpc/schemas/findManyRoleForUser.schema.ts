import { z } from 'zod';
import { RoleForUserWhereInputObjectSchema } from './objects/RoleForUserWhereInput.schema';
import { RoleForUserOrderByWithRelationInputObjectSchema } from './objects/RoleForUserOrderByWithRelationInput.schema';
import { RoleForUserWhereUniqueInputObjectSchema } from './objects/RoleForUserWhereUniqueInput.schema';
import { RoleForUserScalarFieldEnumSchema } from './enums/RoleForUserScalarFieldEnum.schema';

export const RoleForUserFindManySchema = z.object({
  where: RoleForUserWhereInputObjectSchema.optional(),
  orderBy: RoleForUserOrderByWithRelationInputObjectSchema.optional(),
  cursor: RoleForUserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RoleForUserScalarFieldEnumSchema).optional(),
});
