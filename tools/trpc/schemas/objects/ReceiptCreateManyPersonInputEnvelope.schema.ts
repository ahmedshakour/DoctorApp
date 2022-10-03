import { z } from 'zod';
import { ReceiptCreateManyPersonInputObjectSchema } from './ReceiptCreateManyPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateManyPersonInputEnvelope> = z
  .object({
    data: z.lazy(() => ReceiptCreateManyPersonInputObjectSchema).array(),
  })
  .strict();

export const ReceiptCreateManyPersonInputEnvelopeObjectSchema = Schema;
