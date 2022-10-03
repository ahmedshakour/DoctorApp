import { z } from 'zod';
import { RoleForUserWhereUniqueInputObjectSchema } from './objects/RoleForUserWhereUniqueInput.schema';
import { RoleForUserCreateInputObjectSchema } from './objects/RoleForUserCreateInput.schema';
import { RoleForUserUpdateInputObjectSchema } from './objects/RoleForUserUpdateInput.schema';

export const RoleForUserUpsertSchema = z.object({
  where: RoleForUserWhereUniqueInputObjectSchema,
  create: RoleForUserCreateInputObjectSchema,
  update: RoleForUserUpdateInputObjectSchema,
});
