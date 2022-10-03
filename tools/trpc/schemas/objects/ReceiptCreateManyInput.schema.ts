import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateManyInput> = z
  .object({
    drug: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    dose: z.string().optional().nullable(),
    freq: z.string().optional().nullable(),
    route: z.string().optional().nullable(),
    note: z.string().optional().nullable(),
    userId: z.number().optional().nullable(),
    personId: z.number().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const ReceiptCreateManyInputObjectSchema = Schema;
