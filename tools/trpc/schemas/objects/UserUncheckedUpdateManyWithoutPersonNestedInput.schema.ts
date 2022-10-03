import { z } from 'zod';
import { UserCreateWithoutPersonInputObjectSchema } from './UserCreateWithoutPersonInput.schema';
import { UserUncheckedCreateWithoutPersonInputObjectSchema } from './UserUncheckedCreateWithoutPersonInput.schema';
import { UserCreateOrConnectWithoutPersonInputObjectSchema } from './UserCreateOrConnectWithoutPersonInput.schema';
import { UserUpsertWithWhereUniqueWithoutPersonInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutPersonInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutPersonInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutPersonInput.schema';
import { UserUpdateManyWithWhereWithoutPersonInputObjectSchema } from './UserUpdateManyWithWhereWithoutPersonInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutPersonNestedInput> =
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
        upsert: z
          .union([
            z.lazy(
              () => UserUpsertWithWhereUniqueWithoutPersonInputObjectSchema,
            ),
            z
              .lazy(
                () => UserUpsertWithWhereUniqueWithoutPersonInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        set: z
          .union([
            z.lazy(() => UserWhereUniqueInputObjectSchema),
            z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => UserWhereUniqueInputObjectSchema),
            z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => UserWhereUniqueInputObjectSchema),
            z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
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
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => UserUpdateWithWhereUniqueWithoutPersonInputObjectSchema,
            ),
            z
              .lazy(
                () => UserUpdateWithWhereUniqueWithoutPersonInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        updateMany: z
          .union([
            z.lazy(() => UserUpdateManyWithWhereWithoutPersonInputObjectSchema),
            z
              .lazy(() => UserUpdateManyWithWhereWithoutPersonInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => UserScalarWhereInputObjectSchema),
            z.lazy(() => UserScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const UserUncheckedUpdateManyWithoutPersonNestedInputObjectSchema =
  Schema;
