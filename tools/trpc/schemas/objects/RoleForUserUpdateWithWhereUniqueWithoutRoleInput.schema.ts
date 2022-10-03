import { z } from 'zod';
import { RoleForUserWhereUniqueInputObjectSchema } from './RoleForUserWhereUniqueInput.schema';
import { RoleForUserUpdateWithoutRoleInputObjectSchema } from './RoleForUserUpdateWithoutRoleInput.schema';
import { RoleForUserUncheckedUpdateWithoutRoleInputObjectSchema } from './RoleForUserUncheckedUpdateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserUpdateWithWhereUniqueWithoutRoleInput> =
  z
    .object({
      where: z.lazy(() => RoleForUserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RoleForUserUpdateWithoutRoleInputObjectSchema),
        z.lazy(() => RoleForUserUncheckedUpdateWithoutRoleInputObjectSchema),
      ]),
    })
    .strict();

export const RoleForUserUpdateWithWhereUniqueWithoutRoleInputObjectSchema =
  Schema;
