import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateManyInput> = z
  .object({
    name: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    address: z.string(),
    dateOfbirthday: z.date(),
    genderId: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const PersonCreateManyInputObjectSchema = Schema;
