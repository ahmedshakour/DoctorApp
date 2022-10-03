import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyGenderInput> = z
  .object({
    email: z.string(),
    password: z.string(),
    displayname: z.string().optional().nullable(),
    provider: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const UserCreateManyGenderInputObjectSchema = Schema;
