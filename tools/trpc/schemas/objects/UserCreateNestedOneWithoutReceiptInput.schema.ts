import { z } from 'zod';
import { UserCreateWithoutReceiptInputObjectSchema } from './UserCreateWithoutReceiptInput.schema';
import { UserUncheckedCreateWithoutReceiptInputObjectSchema } from './UserUncheckedCreateWithoutReceiptInput.schema';
import { UserCreateOrConnectWithoutReceiptInputObjectSchema } from './UserCreateOrConnectWithoutReceiptInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutReceiptInput> =
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
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const UserCreateNestedOneWithoutReceiptInputObjectSchema = Schema;
