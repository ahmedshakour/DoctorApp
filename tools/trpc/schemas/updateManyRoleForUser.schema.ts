import { z } from 'zod';
import { RoleForUserUpdateManyMutationInputObjectSchema } from './objects/RoleForUserUpdateManyMutationInput.schema';
import { RoleForUserWhereInputObjectSchema } from './objects/RoleForUserWhereInput.schema';

export const RoleForUserUpdateManySchema = z.object({
  data: RoleForUserUpdateManyMutationInputObjectSchema,
  where: RoleForUserWhereInputObjectSchema.optional(),
});
