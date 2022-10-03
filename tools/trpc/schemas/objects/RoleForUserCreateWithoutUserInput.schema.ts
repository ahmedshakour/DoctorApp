import { z } from 'zod';
import { RoleCreateNestedOneWithoutRoleForPersonInputObjectSchema } from './RoleCreateNestedOneWithoutRoleForPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserCreateWithoutUserInput> = z
  .object({
    role: z.lazy(
      () => RoleCreateNestedOneWithoutRoleForPersonInputObjectSchema,
    ),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const RoleForUserCreateWithoutUserInputObjectSchema = Schema;
