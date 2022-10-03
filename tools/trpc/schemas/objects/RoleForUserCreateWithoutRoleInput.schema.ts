import { z } from 'zod';
import { UserCreateNestedOneWithoutRoleForUserInputObjectSchema } from './UserCreateNestedOneWithoutRoleForUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserCreateWithoutRoleInput> = z
  .object({
    user: z.lazy(() => UserCreateNestedOneWithoutRoleForUserInputObjectSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const RoleForUserCreateWithoutRoleInputObjectSchema = Schema;
