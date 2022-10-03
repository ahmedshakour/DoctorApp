import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { PersonListRelationFilterObjectSchema } from './PersonListRelationFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GenderWhereInputObjectSchema),
        z.lazy(() => GenderWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GenderWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GenderWhereInputObjectSchema),
        z.lazy(() => GenderWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    type: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    user: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    Person: z.lazy(() => PersonListRelationFilterObjectSchema).optional(),
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

export const GenderWhereInputObjectSchema = Schema;
