import { z } from 'zod';
import { RoleUpdateWithoutRoleForPersonInputObjectSchema } from './RoleUpdateWithoutRoleForPersonInput.schema';
import { RoleUncheckedUpdateWithoutRoleForPersonInputObjectSchema } from './RoleUncheckedUpdateWithoutRoleForPersonInput.schema';
import { RoleCreateWithoutRoleForPersonInputObjectSchema } from './RoleCreateWithoutRoleForPersonInput.schema';
import { RoleUncheckedCreateWithoutRoleForPersonInputObjectSchema } from './RoleUncheckedCreateWithoutRoleForPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpsertWithoutRoleForPersonInput> = z
  .object({
    update: z.union([
      z.lazy(() => RoleUpdateWithoutRoleForPersonInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutRoleForPersonInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RoleCreateWithoutRoleForPersonInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutRoleForPersonInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpsertWithoutRoleForPersonInputObjectSchema = Schema;
