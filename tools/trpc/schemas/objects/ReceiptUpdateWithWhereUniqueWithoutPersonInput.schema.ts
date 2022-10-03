import { z } from 'zod';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptUpdateWithoutPersonInputObjectSchema } from './ReceiptUpdateWithoutPersonInput.schema';
import { ReceiptUncheckedUpdateWithoutPersonInputObjectSchema } from './ReceiptUncheckedUpdateWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpdateWithWhereUniqueWithoutPersonInput> =
  z
    .object({
      where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ReceiptUpdateWithoutPersonInputObjectSchema),
        z.lazy(() => ReceiptUncheckedUpdateWithoutPersonInputObjectSchema),
      ]),
    })
    .strict();

export const ReceiptUpdateWithWhereUniqueWithoutPersonInputObjectSchema =
  Schema;
