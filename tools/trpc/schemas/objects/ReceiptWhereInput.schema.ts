import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { PersonRelationFilterObjectSchema } from './PersonRelationFilter.schema';
import { PersonWhereInputObjectSchema } from './PersonWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReceiptWhereInputObjectSchema),
        z.lazy(() => ReceiptWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReceiptWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReceiptWhereInputObjectSchema),
        z.lazy(() => ReceiptWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    drug: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    dose: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    freq: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    route: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    note: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    User: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    userId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    Person: z
      .union([
        z.lazy(() => PersonRelationFilterObjectSchema),
        z.lazy(() => PersonWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    personId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
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

export const ReceiptWhereInputObjectSchema = Schema;
