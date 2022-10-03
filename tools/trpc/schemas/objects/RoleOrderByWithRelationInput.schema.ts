import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleForUserOrderByRelationAggregateInputObjectSchema } from './RoleForUserOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    roleForPerson: z
      .lazy(() => RoleForUserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RoleOrderByWithRelationInputObjectSchema = Schema;
