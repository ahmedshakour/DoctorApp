import { z } from 'zod';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptUpdateWithoutPersonInputObjectSchema } from './ReceiptUpdateWithoutPersonInput.schema';
import { ReceiptUncheckedUpdateWithoutPersonInputObjectSchema } from './ReceiptUncheckedUpdateWithoutPersonInput.schema';
import { ReceiptCreateWithoutPersonInputObjectSchema } from './ReceiptCreateWithoutPersonInput.schema';
import { ReceiptUncheckedCreateWithoutPersonInputObjectSchema } from './ReceiptUncheckedCreateWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpsertWithWhereUniqueWithoutPersonInput> =
  z
    .object({
      where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ReceiptUpdateWithoutPersonInputObjectSchema),
        z.lazy(() => ReceiptUncheckedUpdateWithoutPersonInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ReceiptCreateWithoutPersonInputObjectSchema),
        z.lazy(() => ReceiptUncheckedCreateWithoutPersonInputObjectSchema),
      ]),
    })
    .strict();

export const ReceiptUpsertWithWhereUniqueWithoutPersonInputObjectSchema =
  Schema;
