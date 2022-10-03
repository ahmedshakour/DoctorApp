import { z } from 'zod';
import { RoleForUserCreateWithoutRoleInputObjectSchema } from './RoleForUserCreateWithoutRoleInput.schema';
import { RoleForUserUncheckedCreateWithoutRoleInputObjectSchema } from './RoleForUserUncheckedCreateWithoutRoleInput.schema';
import { RoleForUserCreateOrConnectWithoutRoleInputObjectSchema } from './RoleForUserCreateOrConnectWithoutRoleInput.schema';
import { RoleForUserCreateManyRoleInputEnvelopeObjectSchema } from './RoleForUserCreateManyRoleInputEnvelope.schema';
import { RoleForUserWhereUniqueInputObjectSchema } from './RoleForUserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserCreateNestedManyWithoutRoleInput> =
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
        createMany: z
          .lazy(() => RoleForUserCreateManyRoleInputEnvelopeObjectSchema)
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
  ]);

export const RoleForUserCreateNestedManyWithoutRoleInputObjectSchema = Schema;
