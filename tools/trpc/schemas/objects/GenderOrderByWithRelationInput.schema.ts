import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { PersonOrderByRelationAggregateInputObjectSchema } from './PersonOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    user: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Person: z
      .lazy(() => PersonOrderByRelationAggregateInputObjectSchema)
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const GenderOrderByWithRelationInputObjectSchema = Schema;
