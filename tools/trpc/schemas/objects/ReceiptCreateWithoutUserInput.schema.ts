import { z } from 'zod';
import { PersonCreateNestedOneWithoutReceiptInputObjectSchema } from './PersonCreateNestedOneWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateWithoutUserInput> = z
  .object({
    drug: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    dose: z.string().optional().nullable(),
    freq: z.string().optional().nullable(),
    route: z.string().optional().nullable(),
    note: z.string().optional().nullable(),
    Person: z
      .lazy(() => PersonCreateNestedOneWithoutReceiptInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict();

export const ReceiptCreateWithoutUserInputObjectSchema = Schema;
