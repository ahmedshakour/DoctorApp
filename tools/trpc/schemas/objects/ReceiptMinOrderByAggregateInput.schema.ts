import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptMinOrderByAggregateInput> = z
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
  })
  .strict();

export const ReceiptMinOrderByAggregateInputObjectSchema = Schema;
