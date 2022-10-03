import { z } from 'zod';
import { RoleForUserCreateManyInputObjectSchema } from './objects/RoleForUserCreateManyInput.schema';

export const RoleForUserCreateManySchema = z.object({
  data: RoleForUserCreateManyInputObjectSchema,
});
