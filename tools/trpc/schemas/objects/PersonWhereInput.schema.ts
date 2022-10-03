import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { ReceiptListRelationFilterObjectSchema } from './ReceiptListRelationFilter.schema';
import { GenderRelationFilterObjectSchema } from './GenderRelationFilter.schema';
import { GenderWhereInputObjectSchema } from './GenderWhereInput.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PersonWhereInputObjectSchema),
        z.lazy(() => PersonWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PersonWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PersonWhereInputObjectSchema),
        z.lazy(() => PersonWhereInputObjectSchema).array(),
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
    user: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    receipt: z.lazy(() => ReceiptListRelationFilterObjectSchema).optional(),
    gender: z
      .union([
        z.lazy(() => GenderRelationFilterObjectSchema),
        z.lazy(() => GenderWhereInputObjectSchema),
      ])
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

export const PersonWhereInputObjectSchema = Schema;
