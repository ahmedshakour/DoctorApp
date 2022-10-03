import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    roleId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RoleForUserSumOrderByAggregateInputObjectSchema = Schema;
