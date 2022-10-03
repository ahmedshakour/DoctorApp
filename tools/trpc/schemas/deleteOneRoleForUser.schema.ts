import { z } from 'zod';
import { RoleForUserWhereUniqueInputObjectSchema } from './objects/RoleForUserWhereUniqueInput.schema';

export const RoleForUserDeleteOneSchema = z.object({
  where: RoleForUserWhereUniqueInputObjectSchema,
});
