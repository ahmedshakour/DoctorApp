import { z } from 'zod';
import { UserCreateWithoutRoleForUserInputObjectSchema } from './UserCreateWithoutRoleForUserInput.schema';
import { UserUncheckedCreateWithoutRoleForUserInputObjectSchema } from './UserUncheckedCreateWithoutRoleForUserInput.schema';
import { UserCreateOrConnectWithoutRoleForUserInputObjectSchema } from './UserCreateOrConnectWithoutRoleForUserInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutRoleForUserInput> =
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
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const UserCreateNestedOneWithoutRoleForUserInputObjectSchema = Schema;
