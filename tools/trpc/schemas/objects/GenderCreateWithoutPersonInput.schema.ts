import { z } from 'zod';
import { UserCreateNestedManyWithoutGenderInputObjectSchema } from './UserCreateNestedManyWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderCreateWithoutPersonInput> = z
  .object({
    type: z.string().optional().nullable(),
    user: z
      .lazy(() => UserCreateNestedManyWithoutGenderInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const GenderCreateWithoutPersonInputObjectSchema = Schema;
