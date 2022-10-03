import { z } from 'zod';
import { PersonUpdateWithoutReceiptInputObjectSchema } from './PersonUpdateWithoutReceiptInput.schema';
import { PersonUncheckedUpdateWithoutReceiptInputObjectSchema } from './PersonUncheckedUpdateWithoutReceiptInput.schema';
import { PersonCreateWithoutReceiptInputObjectSchema } from './PersonCreateWithoutReceiptInput.schema';
import { PersonUncheckedCreateWithoutReceiptInputObjectSchema } from './PersonUncheckedCreateWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpsertWithoutReceiptInput> = z
  .object({
    update: z.union([
      z.lazy(() => PersonUpdateWithoutReceiptInputObjectSchema),
      z.lazy(() => PersonUncheckedUpdateWithoutReceiptInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PersonCreateWithoutReceiptInputObjectSchema),
      z.lazy(() => PersonUncheckedCreateWithoutReceiptInputObjectSchema),
    ]),
  })
  .strict();

export const PersonUpsertWithoutReceiptInputObjectSchema = Schema;
