import { z } from 'zod';
import { RoleForUserUpdateInputObjectSchema } from './objects/RoleForUserUpdateInput.schema';
import { RoleForUserWhereUniqueInputObjectSchema } from './objects/RoleForUserWhereUniqueInput.schema';

export const RoleForUserUpdateOneSchema = z.object({
  data: RoleForUserUpdateInputObjectSchema,
  where: RoleForUserWhereUniqueInputObjectSchema,
});
