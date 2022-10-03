import { z } from 'zod';
import { UserCreateNestedOneWithoutRoleForUserInputObjectSchema } from './UserCreateNestedOneWithoutRoleForUserInput.schema';
import { RoleCreateNestedOneWithoutRoleForPersonInputObjectSchema } from './RoleCreateNestedOneWithoutRoleForPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserCreateInput> = z
  .object({
    user: z.lazy(() => UserCreateNestedOneWithoutRoleForUserInputObjectSchema),
    role: z.lazy(
      () => RoleCreateNestedOneWithoutRoleForPersonInputObjectSchema,
    ),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const RoleForUserCreateInputObjectSchema = Schema;
