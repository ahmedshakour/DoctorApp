import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { PersonListRelationFilterObjectSchema } from './PersonListRelationFilter.schema';
import { GenderRelationFilterObjectSchema } from './GenderRelationFilter.schema';
import { GenderWhereInputObjectSchema } from './GenderWhereInput.schema';
import { ReceiptListRelationFilterObjectSchema } from './ReceiptListRelationFilter.schema';
import { RoleForUserListRelationFilterObjectSchema } from './RoleForUserListRelationFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    password: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    displayname: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    provider: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    person: z.lazy(() => PersonListRelationFilterObjectSchema).optional(),
    gender: z
      .union([
        z.lazy(() => GenderRelationFilterObjectSchema),
        z.lazy(() => GenderWhereInputObjectSchema),
      ])
      .optional(),
    genderId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    receipt: z.lazy(() => ReceiptListRelationFilterObjectSchema).optional(),
    roleForUser: z
      .lazy(() => RoleForUserListRelationFilterObjectSchema)
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

export const UserWhereInputObjectSchema = Schema;
