import { z } from 'zod';
import { RoleCreateWithoutRoleForPersonInputObjectSchema } from './RoleCreateWithoutRoleForPersonInput.schema';
import { RoleUncheckedCreateWithoutRoleForPersonInputObjectSchema } from './RoleUncheckedCreateWithoutRoleForPersonInput.schema';
import { RoleCreateOrConnectWithoutRoleForPersonInputObjectSchema } from './RoleCreateOrConnectWithoutRoleForPersonInput.schema';
import { RoleUpsertWithoutRoleForPersonInputObjectSchema } from './RoleUpsertWithoutRoleForPersonInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutRoleForPersonInputObjectSchema } from './RoleUpdateWithoutRoleForPersonInput.schema';
import { RoleUncheckedUpdateWithoutRoleForPersonInputObjectSchema } from './RoleUncheckedUpdateWithoutRoleForPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateOneRequiredWithoutRoleForPersonNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => RoleCreateWithoutRoleForPersonInputObjectSchema),
            z.lazy(
              () => RoleUncheckedCreateWithoutRoleForPersonInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => RoleCreateOrConnectWithoutRoleForPersonInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => RoleUpsertWithoutRoleForPersonInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => RoleUpdateWithoutRoleForPersonInputObjectSchema),
            z.lazy(
              () => RoleUncheckedUpdateWithoutRoleForPersonInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const RoleUpdateOneRequiredWithoutRoleForPersonNestedInputObjectSchema =
  Schema;
