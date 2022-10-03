import { z } from 'zod';
import { ReceiptUncheckedCreateNestedManyWithoutPersonInputObjectSchema } from './ReceiptUncheckedCreateNestedManyWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    name: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    address: z.string(),
    dateOfbirthday: z.date(),
    receipt: z
      .lazy(
        () => ReceiptUncheckedCreateNestedManyWithoutPersonInputObjectSchema,
      )
      .optional(),
    genderId: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const PersonUncheckedCreateWithoutUserInputObjectSchema = Schema;
