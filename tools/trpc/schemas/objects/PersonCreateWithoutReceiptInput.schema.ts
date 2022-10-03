import { z } from 'zod';
import { UserCreateNestedManyWithoutPersonInputObjectSchema } from './UserCreateNestedManyWithoutPersonInput.schema';
import { GenderCreateNestedOneWithoutPersonInputObjectSchema } from './GenderCreateNestedOneWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateWithoutReceiptInput> = z
  .object({
    name: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    address: z.string(),
    dateOfbirthday: z.date(),
    user: z
      .lazy(() => UserCreateNestedManyWithoutPersonInputObjectSchema)
      .optional(),
    gender: z.lazy(() => GenderCreateNestedOneWithoutPersonInputObjectSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const PersonCreateWithoutReceiptInputObjectSchema = Schema;
