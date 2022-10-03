import { z } from 'zod';
import { PersonCreateNestedManyWithoutUserInputObjectSchema } from './PersonCreateNestedManyWithoutUserInput.schema';
import { GenderCreateNestedOneWithoutUserInputObjectSchema } from './GenderCreateNestedOneWithoutUserInput.schema';
import { ReceiptCreateNestedManyWithoutUserInputObjectSchema } from './ReceiptCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutRoleForUserInput> = z
  .object({
    email: z.string(),
    password: z.string(),
    displayname: z.string().optional().nullable(),
    provider: z.string().optional().nullable(),
    person: z
      .lazy(() => PersonCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    gender: z.lazy(() => GenderCreateNestedOneWithoutUserInputObjectSchema),
    receipt: z
      .lazy(() => ReceiptCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const UserCreateWithoutRoleForUserInputObjectSchema = Schema;
