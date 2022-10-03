import { z } from 'zod';
import { RoleForUserWhereInputObjectSchema } from './objects/RoleForUserWhereInput.schema';
import { RoleForUserOrderByWithAggregationInputObjectSchema } from './objects/RoleForUserOrderByWithAggregationInput.schema';
import { RoleForUserScalarWhereWithAggregatesInputObjectSchema } from './objects/RoleForUserScalarWhereWithAggregatesInput.schema';
import { RoleForUserScalarFieldEnumSchema } from './enums/RoleForUserScalarFieldEnum.schema';

export const RoleForUserGroupBySchema = z.object({
  where: RoleForUserWhereInputObjectSchema.optional(),
  orderBy: RoleForUserOrderByWithAggregationInputObjectSchema,
  having: RoleForUserScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RoleForUserScalarFieldEnumSchema),
});
