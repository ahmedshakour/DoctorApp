import { z } from 'zod';
import { PersonCreateNestedManyWithoutUserInputObjectSchema } from './PersonCreateNestedManyWithoutUserInput.schema';
import { ReceiptCreateNestedManyWithoutUserInputObjectSchema } from './ReceiptCreateNestedManyWithoutUserInput.schema';
import { RoleForUserCreateNestedManyWithoutUserInputObjectSchema } from './RoleForUserCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutGenderInput> = z
  .object({
    email: z.string(),
    password: z.string(),
    displayname: z.string().optional().nullable(),
    provider: z.string().optional().nullable(),
    person: z
      .lazy(() => PersonCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    receipt: z
      .lazy(() => ReceiptCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    roleForUser: z
      .lazy(() => RoleForUserCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const UserCreateWithoutGenderInputObjectSchema = Schema;
