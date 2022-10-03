import { z } from 'zod';
import { RoleWhereInputObjectSchema } from './objects/RoleWhereInput.schema';
import { RoleOrderByWithRelationInputObjectSchema } from './objects/RoleOrderByWithRelationInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './objects/RoleWhereUniqueInput.schema';

export const RoleAggregateSchema = z.object({
  where: RoleWhereInputObjectSchema.optional(),
  orderBy: RoleOrderByWithRelationInputObjectSchema.optional(),
  cursor: RoleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
