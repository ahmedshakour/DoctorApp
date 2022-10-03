import { z } from 'zod';
import { RoleForUserWhereInputObjectSchema } from './objects/RoleForUserWhereInput.schema';
import { RoleForUserOrderByWithRelationInputObjectSchema } from './objects/RoleForUserOrderByWithRelationInput.schema';
import { RoleForUserWhereUniqueInputObjectSchema } from './objects/RoleForUserWhereUniqueInput.schema';

export const RoleForUserAggregateSchema = z.object({
  where: RoleForUserWhereInputObjectSchema.optional(),
  orderBy: RoleForUserOrderByWithRelationInputObjectSchema.optional(),
  cursor: RoleForUserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
