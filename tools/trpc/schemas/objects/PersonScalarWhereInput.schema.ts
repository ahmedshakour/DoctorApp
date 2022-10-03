import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PersonScalarWhereInputObjectSchema),
        z.lazy(() => PersonScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PersonScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PersonScalarWhereInputObjectSchema),
        z.lazy(() => PersonScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    phone: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    address: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    dateOfbirthday: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    genderId: z
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

export const PersonScalarWhereInputObjectSchema = Schema;
