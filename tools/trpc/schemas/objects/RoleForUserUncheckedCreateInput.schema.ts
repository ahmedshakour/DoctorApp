import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    userId: z.number(),
    roleId: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const RoleForUserUncheckedCreateInputObjectSchema = Schema;
