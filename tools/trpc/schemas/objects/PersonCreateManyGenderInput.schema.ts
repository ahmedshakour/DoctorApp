import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateManyGenderInput> = z
  .object({
    name: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    address: z.string(),
    dateOfbirthday: z.date(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const PersonCreateManyGenderInputObjectSchema = Schema;
