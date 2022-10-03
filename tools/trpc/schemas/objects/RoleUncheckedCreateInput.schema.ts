import { z } from 'zod';
import { RoleForUserUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './RoleForUserUncheckedCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    roleForPerson: z
      .lazy(
        () => RoleForUserUncheckedCreateNestedManyWithoutRoleInputObjectSchema,
      )
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const RoleUncheckedCreateInputObjectSchema = Schema;
