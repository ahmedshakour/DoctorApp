import { z } from 'zod';
import { ReceiptCreateManyUserInputObjectSchema } from './ReceiptCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => ReceiptCreateManyUserInputObjectSchema).array(),
  })
  .strict();

export const ReceiptCreateManyUserInputEnvelopeObjectSchema = Schema;
