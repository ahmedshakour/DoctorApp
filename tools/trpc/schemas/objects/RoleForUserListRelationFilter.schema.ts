import { z } from 'zod';
import { RoleForUserWhereInputObjectSchema } from './RoleForUserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserListRelationFilter> = z
  .object({
    every: z.lazy(() => RoleForUserWhereInputObjectSchema).optional(),
    some: z.lazy(() => RoleForUserWhereInputObjectSchema).optional(),
    none: z.lazy(() => RoleForUserWhereInputObjectSchema).optional(),
  })
  .strict();

export const RoleForUserListRelationFilterObjectSchema = Schema;
