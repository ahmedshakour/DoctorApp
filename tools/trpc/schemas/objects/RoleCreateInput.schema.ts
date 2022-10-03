import { z } from 'zod';
import { RoleForUserCreateNestedManyWithoutRoleInputObjectSchema } from './RoleForUserCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateInput> = z
  .object({
    name: z.string(),
    roleForPerson: z
      .lazy(() => RoleForUserCreateNestedManyWithoutRoleInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const RoleCreateInputObjectSchema = Schema;
