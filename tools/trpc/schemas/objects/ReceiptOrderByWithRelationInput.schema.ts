import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { PersonOrderByWithRelationInputObjectSchema } from './PersonOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    drug: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    dose: z.lazy(() => SortOrderSchema).optional(),
    freq: z.lazy(() => SortOrderSchema).optional(),
    route: z.lazy(() => SortOrderSchema).optional(),
    note: z.lazy(() => SortOrderSchema).optional(),
    User: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    Person: z.lazy(() => PersonOrderByWithRelationInputObjectSchema).optional(),
    personId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ReceiptOrderByWithRelationInputObjectSchema = Schema;
