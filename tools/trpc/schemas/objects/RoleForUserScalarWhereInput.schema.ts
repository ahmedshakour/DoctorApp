import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RoleForUserScalarWhereInputObjectSchema),
        z.lazy(() => RoleForUserScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoleForUserScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoleForUserScalarWhereInputObjectSchema),
        z.lazy(() => RoleForUserScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    roleId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    isActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
  })
  .strict();

export const RoleForUserScalarWhereInputObjectSchema = Schema;
