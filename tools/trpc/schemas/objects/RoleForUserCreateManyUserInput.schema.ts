import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserCreateManyUserInput> = z
  .object({
    roleId: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const RoleForUserCreateManyUserInputObjectSchema = Schema;
