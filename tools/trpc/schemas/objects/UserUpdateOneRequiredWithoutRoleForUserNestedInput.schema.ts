import { z } from 'zod';
import { UserCreateWithoutRoleForUserInputObjectSchema } from './UserCreateWithoutRoleForUserInput.schema';
import { UserUncheckedCreateWithoutRoleForUserInputObjectSchema } from './UserUncheckedCreateWithoutRoleForUserInput.schema';
import { UserCreateOrConnectWithoutRoleForUserInputObjectSchema } from './UserCreateOrConnectWithoutRoleForUserInput.schema';
import { UserUpsertWithoutRoleForUserInputObjectSchema } from './UserUpsertWithoutRoleForUserInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutRoleForUserInputObjectSchema } from './UserUpdateWithoutRoleForUserInput.schema';
import { UserUncheckedUpdateWithoutRoleForUserInputObjectSchema } from './UserUncheckedUpdateWithoutRoleForUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRoleForUserNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutRoleForUserInputObjectSchema),
            z.lazy(
              () => UserUncheckedCreateWithoutRoleForUserInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => UserCreateOrConnectWithoutRoleForUserInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => UserUpsertWithoutRoleForUserInputObjectSchema)
          .optional(),
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
            z.lazy(() => UserUpdateWithoutRoleForUserInputObjectSchema),
            z.lazy(
              () => UserUncheckedUpdateWithoutRoleForUserInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const UserUpdateOneRequiredWithoutRoleForUserNestedInputObjectSchema =
  Schema;
