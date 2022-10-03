import { z } from 'zod';
import { GenderWhereInputObjectSchema } from './GenderWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderRelationFilter> = z
  .object({
    is: z.lazy(() => GenderWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => GenderWhereInputObjectSchema).optional(),
  })
  .strict();

export const GenderRelationFilterObjectSchema = Schema;
