import { z } from 'zod';
import { RoleForUserWhereUniqueInputObjectSchema } from './objects/RoleForUserWhereUniqueInput.schema';

export const RoleForUserFindUniqueSchema = z.object({
  where: RoleForUserWhereUniqueInputObjectSchema,
});
