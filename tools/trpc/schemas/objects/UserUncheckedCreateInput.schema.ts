import { z } from 'zod';
import { PersonUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PersonUncheckedCreateNestedManyWithoutUserInput.schema';
import { ReceiptUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ReceiptUncheckedCreateNestedManyWithoutUserInput.schema';
import { RoleForUserUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './RoleForUserUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    password: z.string(),
    displayname: z.string().optional().nullable(),
    provider: z.string().optional().nullable(),
    person: z
      .lazy(() => PersonUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    genderId: z.number(),
    receipt: z
      .lazy(() => ReceiptUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    roleForUser: z
      .lazy(
        () => RoleForUserUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
