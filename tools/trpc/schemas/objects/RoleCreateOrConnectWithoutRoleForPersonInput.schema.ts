import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleCreateWithoutRoleForPersonInputObjectSchema } from './RoleCreateWithoutRoleForPersonInput.schema';
import { RoleUncheckedCreateWithoutRoleForPersonInputObjectSchema } from './RoleUncheckedCreateWithoutRoleForPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateOrConnectWithoutRoleForPersonInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoleCreateWithoutRoleForPersonInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutRoleForPersonInputObjectSchema),
    ]),
  })
  .strict();

export const RoleCreateOrConnectWithoutRoleForPersonInputObjectSchema = Schema;
