import { z } from 'zod';
import { ReceiptUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ReceiptUncheckedCreateNestedManyWithoutUserInput.schema';
import { RoleForUserUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './RoleForUserUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutPersonInput> = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    password: z.string(),
    displayname: z.string().optional().nullable(),
    provider: z.string().optional().nullable(),
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

export const UserUncheckedCreateWithoutPersonInputObjectSchema = Schema;
