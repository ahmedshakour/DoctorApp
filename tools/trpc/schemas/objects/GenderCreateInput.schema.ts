import { z } from 'zod';
import { UserCreateNestedManyWithoutGenderInputObjectSchema } from './UserCreateNestedManyWithoutGenderInput.schema';
import { PersonCreateNestedManyWithoutGenderInputObjectSchema } from './PersonCreateNestedManyWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderCreateInput> = z
  .object({
    type: z.string().optional().nullable(),
    user: z
      .lazy(() => UserCreateNestedManyWithoutGenderInputObjectSchema)
      .optional(),
    Person: z
      .lazy(() => PersonCreateNestedManyWithoutGenderInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const GenderCreateInputObjectSchema = Schema;
