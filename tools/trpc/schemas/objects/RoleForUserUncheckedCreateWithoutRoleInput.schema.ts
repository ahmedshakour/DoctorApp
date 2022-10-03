import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserUncheckedCreateWithoutRoleInput> = z
  .object({
    id: z.number().optional(),
    userId: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const RoleForUserUncheckedCreateWithoutRoleInputObjectSchema = Schema;
