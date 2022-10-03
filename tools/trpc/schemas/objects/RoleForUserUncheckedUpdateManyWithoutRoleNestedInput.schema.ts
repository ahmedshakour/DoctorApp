import { z } from 'zod';
import { RoleForUserCreateWithoutRoleInputObjectSchema } from './RoleForUserCreateWithoutRoleInput.schema';
import { RoleForUserUncheckedCreateWithoutRoleInputObjectSchema } from './RoleForUserUncheckedCreateWithoutRoleInput.schema';
import { RoleForUserCreateOrConnectWithoutRoleInputObjectSchema } from './RoleForUserCreateOrConnectWithoutRoleInput.schema';
import { RoleForUserUpsertWithWhereUniqueWithoutRoleInputObjectSchema } from './RoleForUserUpsertWithWhereUniqueWithoutRoleInput.schema';
import { RoleForUserCreateManyRoleInputEnvelopeObjectSchema } from './RoleForUserCreateManyRoleInputEnvelope.schema';
import { RoleForUserWhereUniqueInputObjectSchema } from './RoleForUserWhereUniqueInput.schema';
import { RoleForUserUpdateWithWhereUniqueWithoutRoleInputObjectSchema } from './RoleForUserUpdateWithWhereUniqueWithoutRoleInput.schema';
import { RoleForUserUpdateManyWithWhereWithoutRoleInputObjectSchema } from './RoleForUserUpdateManyWithWhereWithoutRoleInput.schema';
import { RoleForUserScalarWhereInputObjectSchema } from './RoleForUserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserUncheckedUpdateManyWithoutRoleNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => RoleForUserCreateWithoutRoleInputObjectSchema),
            z.lazy(() => RoleForUserCreateWithoutRoleInputObjectSchema).array(),
            z.lazy(
              () => RoleForUserUncheckedCreateWithoutRoleInputObjectSchema,
            ),
            z
              .lazy(
                () => RoleForUserUncheckedCreateWithoutRoleInputObjectSchema,
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
              () => RoleForUserCreateOrConnectWithoutRoleInputObjectSchema,
            ),
            z
              .lazy(
                () => RoleForUserCreateOrConnectWithoutRoleInputObjectSchema,
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
                RoleForUserUpsertWithWhereUniqueWithoutRoleInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  RoleForUserUpsertWithWhereUniqueWithoutRoleInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => RoleForUserCreateManyRoleInputEnvelopeObjectSchema)
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
                RoleForUserUpdateWithWhereUniqueWithoutRoleInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  RoleForUserUpdateWithWhereUniqueWithoutRoleInputObjectSchema,
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
              () => RoleForUserUpdateManyWithWhereWithoutRoleInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  RoleForUserUpdateManyWithWhereWithoutRoleInputObjectSchema,
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

export const RoleForUserUncheckedUpdateManyWithoutRoleNestedInputObjectSchema =
  Schema;
