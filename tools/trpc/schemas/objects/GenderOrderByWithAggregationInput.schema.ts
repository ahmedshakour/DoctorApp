import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GenderCountOrderByAggregateInputObjectSchema } from './GenderCountOrderByAggregateInput.schema';
import { GenderAvgOrderByAggregateInputObjectSchema } from './GenderAvgOrderByAggregateInput.schema';
import { GenderMaxOrderByAggregateInputObjectSchema } from './GenderMaxOrderByAggregateInput.schema';
import { GenderMinOrderByAggregateInputObjectSchema } from './GenderMinOrderByAggregateInput.schema';
import { GenderSumOrderByAggregateInputObjectSchema } from './GenderSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => GenderCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => GenderAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => GenderMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => GenderMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => GenderSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const GenderOrderByWithAggregationInputObjectSchema = Schema;
