import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateWithoutRoleForPersonInput> = z
  .object({
    name: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const RoleCreateWithoutRoleForPersonInputObjectSchema = Schema;
