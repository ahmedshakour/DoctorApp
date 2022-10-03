import { z } from 'zod';
import { RoleForUserCreateWithoutUserInputObjectSchema } from './RoleForUserCreateWithoutUserInput.schema';
import { RoleForUserUncheckedCreateWithoutUserInputObjectSchema } from './RoleForUserUncheckedCreateWithoutUserInput.schema';
import { RoleForUserCreateOrConnectWithoutUserInputObjectSchema } from './RoleForUserCreateOrConnectWithoutUserInput.schema';
import { RoleForUserCreateManyUserInputEnvelopeObjectSchema } from './RoleForUserCreateManyUserInputEnvelope.schema';
import { RoleForUserWhereUniqueInputObjectSchema } from './RoleForUserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserCreateNestedManyWithoutUserInput> =
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
        createMany: z
          .lazy(() => RoleForUserCreateManyUserInputEnvelopeObjectSchema)
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

export const RoleForUserCreateNestedManyWithoutUserInputObjectSchema = Schema;
