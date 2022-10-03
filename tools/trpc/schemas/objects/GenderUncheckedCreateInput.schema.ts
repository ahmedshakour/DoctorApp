import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutGenderInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutGenderInput.schema';
import { PersonUncheckedCreateNestedManyWithoutGenderInputObjectSchema } from './PersonUncheckedCreateNestedManyWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    type: z.string().optional().nullable(),
    user: z
      .lazy(() => UserUncheckedCreateNestedManyWithoutGenderInputObjectSchema)
      .optional(),
    Person: z
      .lazy(() => PersonUncheckedCreateNestedManyWithoutGenderInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const GenderUncheckedCreateInputObjectSchema = Schema;
