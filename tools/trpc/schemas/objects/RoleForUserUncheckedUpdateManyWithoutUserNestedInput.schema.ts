import { z } from 'zod';
import { RoleForUserCreateWithoutUserInputObjectSchema } from './RoleForUserCreateWithoutUserInput.schema';
import { RoleForUserUncheckedCreateWithoutUserInputObjectSchema } from './RoleForUserUncheckedCreateWithoutUserInput.schema';
import { RoleForUserCreateOrConnectWithoutUserInputObjectSchema } from './RoleForUserCreateOrConnectWithoutUserInput.schema';
import { RoleForUserUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './RoleForUserUpsertWithWhereUniqueWithoutUserInput.schema';
import { RoleForUserCreateManyUserInputEnvelopeObjectSchema } from './RoleForUserCreateManyUserInputEnvelope.schema';
import { RoleForUserWhereUniqueInputObjectSchema } from './RoleForUserWhereUniqueInput.schema';
import { RoleForUserUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './RoleForUserUpdateWithWhereUniqueWithoutUserInput.schema';
import { RoleForUserUpdateManyWithWhereWithoutUserInputObjectSchema } from './RoleForUserUpdateManyWithWhereWithoutUserInput.schema';
import { RoleForUserScalarWhereInputObjectSchema } from './RoleForUserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserUncheckedUpdateManyWithoutUserNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => RoleForUserCreateWithoutUserInputObjectSchema),
            z.lazy(() => RoleForUserCreateWithoutUserInputObjectSchema).array(),
            z.lazy(
              () => RoleForUserUncheckedCreateWithoutUserInputObjectSchema,
            ),
            z
              .lazy(
                () => RoleForUserUncheckedCreateWithoutUserInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(
              () => RoleForUserCreateOrConnectWithoutUserInputObjectSchema,
            ),
            z
              .lazy(
                () => RoleForUserCreateOrConnectWithoutUserInputObjectSchema,
              )
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
              () =>
                RoleForUserUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  RoleForUserUpsertWithWhereUniqueWithoutUserInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => RoleForUserCreateManyUserInputEnvelopeObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        set: z
          .union([
            z.lazy(() => RoleForUserWhereUniqueInputObjectSchema),
            z.lazy(() => RoleForUserWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => RoleForUserWhereUniqueInputObjectSchema),
            z.lazy(() => RoleForUserWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => RoleForUserWhereUniqueInputObjectSchema),
            z.lazy(() => RoleForUserWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => RoleForUserWhereUniqueInputObjectSchema),
            z.lazy(() => RoleForUserWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () =>
                RoleForUserUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  RoleForUserUpdateWithWhereUniqueWithoutUserInputObjectSchema,
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
            z.lazy(
              () => RoleForUserUpdateManyWithWhereWithoutUserInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  RoleForUserUpdateManyWithWhereWithoutUserInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => RoleForUserScalarWhereInputObjectSchema),
            z.lazy(() => RoleForUserScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const RoleForUserUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
