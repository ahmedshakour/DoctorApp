import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ReceiptCountOrderByAggregateInputObjectSchema } from './ReceiptCountOrderByAggregateInput.schema';
import { ReceiptAvgOrderByAggregateInputObjectSchema } from './ReceiptAvgOrderByAggregateInput.schema';
import { ReceiptMaxOrderByAggregateInputObjectSchema } from './ReceiptMaxOrderByAggregateInput.schema';
import { ReceiptMinOrderByAggregateInputObjectSchema } from './ReceiptMinOrderByAggregateInput.schema';
import { ReceiptSumOrderByAggregateInputObjectSchema } from './ReceiptSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    drug: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    dose: z.lazy(() => SortOrderSchema).optional(),
    freq: z.lazy(() => SortOrderSchema).optional(),
    route: z.lazy(() => SortOrderSchema).optional(),
    note: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    personId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ReceiptCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ReceiptAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ReceiptMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ReceiptMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ReceiptSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ReceiptOrderByWithAggregationInputObjectSchema = Schema;
