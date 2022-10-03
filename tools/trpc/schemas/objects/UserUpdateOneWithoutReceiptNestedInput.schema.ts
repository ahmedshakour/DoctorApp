import { z } from 'zod';
import { UserCreateWithoutReceiptInputObjectSchema } from './UserCreateWithoutReceiptInput.schema';
import { UserUncheckedCreateWithoutReceiptInputObjectSchema } from './UserUncheckedCreateWithoutReceiptInput.schema';
import { UserCreateOrConnectWithoutReceiptInputObjectSchema } from './UserCreateOrConnectWithoutReceiptInput.schema';
import { UserUpsertWithoutReceiptInputObjectSchema } from './UserUpsertWithoutReceiptInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutReceiptInputObjectSchema } from './UserUpdateWithoutReceiptInput.schema';
import { UserUncheckedUpdateWithoutReceiptInputObjectSchema } from './UserUncheckedUpdateWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutReceiptNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutReceiptInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutReceiptInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => UserCreateOrConnectWithoutReceiptInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => UserUpsertWithoutReceiptInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => UserUpdateWithoutReceiptInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutReceiptInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const UserUpdateOneWithoutReceiptNestedInputObjectSchema = Schema;
