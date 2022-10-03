import { z } from 'zod';
import { RoleForUserWhereInputObjectSchema } from './objects/RoleForUserWhereInput.schema';

export const RoleForUserDeleteManySchema = z.object({
  where: RoleForUserWhereInputObjectSchema.optional(),
});
