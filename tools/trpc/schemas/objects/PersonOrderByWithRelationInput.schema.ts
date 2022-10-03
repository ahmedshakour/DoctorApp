import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { ReceiptOrderByRelationAggregateInputObjectSchema } from './ReceiptOrderByRelationAggregateInput.schema';
import { GenderOrderByWithRelationInputObjectSchema } from './GenderOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    dateOfbirthday: z.lazy(() => SortOrderSchema).optional(),
    user: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    receipt: z
      .lazy(() => ReceiptOrderByRelationAggregateInputObjectSchema)
      .optional(),
    gender: z.lazy(() => GenderOrderByWithRelationInputObjectSchema).optional(),
    genderId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PersonOrderByWithRelationInputObjectSchema = Schema;
