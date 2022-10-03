import { z } from 'zod';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptCreateWithoutPersonInputObjectSchema } from './ReceiptCreateWithoutPersonInput.schema';
import { ReceiptUncheckedCreateWithoutPersonInputObjectSchema } from './ReceiptUncheckedCreateWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateOrConnectWithoutPersonInput> = z
  .object({
    where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReceiptCreateWithoutPersonInputObjectSchema),
      z.lazy(() => ReceiptUncheckedCreateWithoutPersonInputObjectSchema),
    ]),
  })
  .strict();

export const ReceiptCreateOrConnectWithoutPersonInputObjectSchema = Schema;
