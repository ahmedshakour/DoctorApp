import { z } from 'zod';
import { PersonUncheckedCreateNestedManyWithoutGenderInputObjectSchema } from './PersonUncheckedCreateNestedManyWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    type: z.string().optional().nullable(),
    Person: z
      .lazy(() => PersonUncheckedCreateNestedManyWithoutGenderInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const GenderUncheckedCreateWithoutUserInputObjectSchema = Schema;
