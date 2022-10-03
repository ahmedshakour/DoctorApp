import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleForUserCountOrderByAggregateInputObjectSchema } from './RoleForUserCountOrderByAggregateInput.schema';
import { RoleForUserAvgOrderByAggregateInputObjectSchema } from './RoleForUserAvgOrderByAggregateInput.schema';
import { RoleForUserMaxOrderByAggregateInputObjectSchema } from './RoleForUserMaxOrderByAggregateInput.schema';
import { RoleForUserMinOrderByAggregateInputObjectSchema } from './RoleForUserMinOrderByAggregateInput.schema';
import { RoleForUserSumOrderByAggregateInputObjectSchema } from './RoleForUserSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    roleId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RoleForUserCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => RoleForUserAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => RoleForUserMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => RoleForUserMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => RoleForUserSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleForUserOrderByWithAggregationInputObjectSchema = Schema;
