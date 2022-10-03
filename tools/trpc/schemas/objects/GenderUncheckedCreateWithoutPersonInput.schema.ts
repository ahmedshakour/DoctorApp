import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutGenderInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderUncheckedCreateWithoutPersonInput> = z
  .object({
    id: z.number().optional(),
    type: z.string().optional().nullable(),
    user: z
      .lazy(() => UserUncheckedCreateNestedManyWithoutGenderInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const GenderUncheckedCreateWithoutPersonInputObjectSchema = Schema;
