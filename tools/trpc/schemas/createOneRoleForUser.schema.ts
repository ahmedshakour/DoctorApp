import { z } from 'zod';
import { RoleForUserCreateInputObjectSchema } from './objects/RoleForUserCreateInput.schema';

export const RoleForUserCreateOneSchema = z.object({
  data: RoleForUserCreateInputObjectSchema,
});
