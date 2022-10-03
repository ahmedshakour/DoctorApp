import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    genderId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PersonAvgOrderByAggregateInputObjectSchema = Schema;
