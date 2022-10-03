import { z } from 'zod';
import { UserCreateNestedOneWithoutReceiptInputObjectSchema } from './UserCreateNestedOneWithoutReceiptInput.schema';
import { PersonCreateNestedOneWithoutReceiptInputObjectSchema } from './PersonCreateNestedOneWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateInput> = z
  .object({
    drug: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    dose: z.string().optional().nullable(),
    freq: z.string().optional().nullable(),
    route: z.string().optional().nullable(),
    note: z.string().optional().nullable(),
    User: z
      .lazy(() => UserCreateNestedOneWithoutReceiptInputObjectSchema)
      .optional(),
    Person: z
      .lazy(() => PersonCreateNestedOneWithoutReceiptInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const ReceiptCreateInputObjectSchema = Schema;
