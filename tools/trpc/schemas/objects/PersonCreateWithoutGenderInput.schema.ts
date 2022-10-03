import { z } from 'zod';
import { UserCreateNestedManyWithoutPersonInputObjectSchema } from './UserCreateNestedManyWithoutPersonInput.schema';
import { ReceiptCreateNestedManyWithoutPersonInputObjectSchema } from './ReceiptCreateNestedManyWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateWithoutGenderInput> = z
  .object({
    name: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    address: z.string(),
    dateOfbirthday: z.date(),
    user: z
      .lazy(() => UserCreateNestedManyWithoutPersonInputObjectSchema)
      .optional(),
    receipt: z
      .lazy(() => ReceiptCreateNestedManyWithoutPersonInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const PersonCreateWithoutGenderInputObjectSchema = Schema;
