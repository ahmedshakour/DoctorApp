import { z } from 'zod';
import { UserCreateWithoutPersonInputObjectSchema } from './UserCreateWithoutPersonInput.schema';
import { UserUncheckedCreateWithoutPersonInputObjectSchema } from './UserUncheckedCreateWithoutPersonInput.schema';
import { UserCreateOrConnectWithoutPersonInputObjectSchema } from './UserCreateOrConnectWithoutPersonInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutPersonInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutPersonInputObjectSchema),
            z.lazy(() => UserCreateWithoutPersonInputObjectSchema).array(),
            z.lazy(() => UserUncheckedCreateWithoutPersonInputObjectSchema),
            z
              .lazy(() => UserUncheckedCreateWithoutPersonInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => UserCreateOrConnectWithoutPersonInputObjectSchema),
            z
              .lazy(() => UserCreateOrConnectWithoutPersonInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => UserWhereUniqueInputObjectSchema),
            z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const UserUncheckedCreateNestedManyWithoutPersonInputObjectSchema =
  Schema;
