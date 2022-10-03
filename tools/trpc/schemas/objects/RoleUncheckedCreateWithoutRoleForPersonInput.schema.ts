import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedCreateWithoutRoleForPersonInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const RoleUncheckedCreateWithoutRoleForPersonInputObjectSchema = Schema;
