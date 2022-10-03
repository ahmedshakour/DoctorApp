import { z } from 'zod';
import { UserUpdateWithoutReceiptInputObjectSchema } from './UserUpdateWithoutReceiptInput.schema';
import { UserUncheckedUpdateWithoutReceiptInputObjectSchema } from './UserUncheckedUpdateWithoutReceiptInput.schema';
import { UserCreateWithoutReceiptInputObjectSchema } from './UserCreateWithoutReceiptInput.schema';
import { UserUncheckedCreateWithoutReceiptInputObjectSchema } from './UserUncheckedCreateWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutReceiptInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutReceiptInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutReceiptInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutReceiptInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutReceiptInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutReceiptInputObjectSchema = Schema;
