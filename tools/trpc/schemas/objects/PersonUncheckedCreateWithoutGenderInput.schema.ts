import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutPersonInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutPersonInput.schema';
import { ReceiptUncheckedCreateNestedManyWithoutPersonInputObjectSchema } from './ReceiptUncheckedCreateNestedManyWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUncheckedCreateWithoutGenderInput> = z
  .object({
    id: z.number().optional(),
    name: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    address: z.string(),
    dateOfbirthday: z.date(),
    user: z
      .lazy(() => UserUncheckedCreateNestedManyWithoutPersonInputObjectSchema)
      .optional(),
    receipt: z
      .lazy(
        () => ReceiptUncheckedCreateNestedManyWithoutPersonInputObjectSchema,
      )
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const PersonUncheckedCreateWithoutGenderInputObjectSchema = Schema;
