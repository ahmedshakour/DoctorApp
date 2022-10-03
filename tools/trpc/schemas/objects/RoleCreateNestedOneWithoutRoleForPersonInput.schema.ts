import { z } from 'zod';
import { RoleCreateWithoutRoleForPersonInputObjectSchema } from './RoleCreateWithoutRoleForPersonInput.schema';
import { RoleUncheckedCreateWithoutRoleForPersonInputObjectSchema } from './RoleUncheckedCreateWithoutRoleForPersonInput.schema';
import { RoleCreateOrConnectWithoutRoleForPersonInputObjectSchema } from './RoleCreateOrConnectWithoutRoleForPersonInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateNestedOneWithoutRoleForPersonInput> =
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
        connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const RoleCreateNestedOneWithoutRoleForPersonInputObjectSchema = Schema;
