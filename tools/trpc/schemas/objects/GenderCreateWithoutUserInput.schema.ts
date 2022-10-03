import { z } from 'zod';
import { PersonCreateNestedManyWithoutGenderInputObjectSchema } from './PersonCreateNestedManyWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderCreateWithoutUserInput> = z
  .object({
    type: z.string().optional().nullable(),
    Person: z
      .lazy(() => PersonCreateNestedManyWithoutGenderInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const GenderCreateWithoutUserInputObjectSchema = Schema;
