import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { RoleOrderByWithRelationInputObjectSchema } from './RoleOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => RoleOrderByWithRelationInputObjectSchema).optional(),
    roleId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RoleForUserOrderByWithRelationInputObjectSchema = Schema;
