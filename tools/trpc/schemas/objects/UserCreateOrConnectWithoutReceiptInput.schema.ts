import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutReceiptInputObjectSchema } from './UserCreateWithoutReceiptInput.schema';
import { UserUncheckedCreateWithoutReceiptInputObjectSchema } from './UserUncheckedCreateWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutReceiptInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutReceiptInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutReceiptInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutReceiptInputObjectSchema = Schema;
