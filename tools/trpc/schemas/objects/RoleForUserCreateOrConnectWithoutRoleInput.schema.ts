import { z } from 'zod';
import { RoleForUserWhereUniqueInputObjectSchema } from './RoleForUserWhereUniqueInput.schema';
import { RoleForUserCreateWithoutRoleInputObjectSchema } from './RoleForUserCreateWithoutRoleInput.schema';
import { RoleForUserUncheckedCreateWithoutRoleInputObjectSchema } from './RoleForUserUncheckedCreateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserCreateOrConnectWithoutRoleInput> = z
  .object({
    where: z.lazy(() => RoleForUserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoleForUserCreateWithoutRoleInputObjectSchema),
      z.lazy(() => RoleForUserUncheckedCreateWithoutRoleInputObjectSchema),
    ]),
  })
  .strict();

export const RoleForUserCreateOrConnectWithoutRoleInputObjectSchema = Schema;
