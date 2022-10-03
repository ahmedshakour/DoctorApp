import { z } from 'zod';
import { RoleForUserWhereUniqueInputObjectSchema } from './RoleForUserWhereUniqueInput.schema';
import { RoleForUserUpdateWithoutRoleInputObjectSchema } from './RoleForUserUpdateWithoutRoleInput.schema';
import { RoleForUserUncheckedUpdateWithoutRoleInputObjectSchema } from './RoleForUserUncheckedUpdateWithoutRoleInput.schema';
import { RoleForUserCreateWithoutRoleInputObjectSchema } from './RoleForUserCreateWithoutRoleInput.schema';
import { RoleForUserUncheckedCreateWithoutRoleInputObjectSchema } from './RoleForUserUncheckedCreateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserUpsertWithWhereUniqueWithoutRoleInput> =
  z
    .object({
      where: z.lazy(() => RoleForUserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RoleForUserUpdateWithoutRoleInputObjectSchema),
        z.lazy(() => RoleForUserUncheckedUpdateWithoutRoleInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RoleForUserCreateWithoutRoleInputObjectSchema),
        z.lazy(() => RoleForUserUncheckedCreateWithoutRoleInputObjectSchema),
      ]),
    })
    .strict();

export const RoleForUserUpsertWithWhereUniqueWithoutRoleInputObjectSchema =
  Schema;
