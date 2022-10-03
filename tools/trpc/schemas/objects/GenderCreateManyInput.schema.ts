import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderCreateManyInput> = z
  .object({
    type: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const GenderCreateManyInputObjectSchema = Schema;
