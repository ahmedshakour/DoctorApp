import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PersonOrderByRelationAggregateInputObjectSchema } from './PersonOrderByRelationAggregateInput.schema';
import { GenderOrderByWithRelationInputObjectSchema } from './GenderOrderByWithRelationInput.schema';
import { ReceiptOrderByRelationAggregateInputObjectSchema } from './ReceiptOrderByRelationAggregateInput.schema';
import { RoleForUserOrderByRelationAggregateInputObjectSchema } from './RoleForUserOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    displayname: z.lazy(() => SortOrderSchema).optional(),
    provider: z.lazy(() => SortOrderSchema).optional(),
    person: z
      .lazy(() => PersonOrderByRelationAggregateInputObjectSchema)
      .optional(),
    gender: z.lazy(() => GenderOrderByWithRelationInputObjectSchema).optional(),
    genderId: z.lazy(() => SortOrderSchema).optional(),
    receipt: z
      .lazy(() => ReceiptOrderByRelationAggregateInputObjectSchema)
      .optional(),
    roleForUser: z
      .lazy(() => RoleForUserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
