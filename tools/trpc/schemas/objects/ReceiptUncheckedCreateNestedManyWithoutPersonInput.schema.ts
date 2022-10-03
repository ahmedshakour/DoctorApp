import { z } from 'zod';
import { ReceiptCreateWithoutPersonInputObjectSchema } from './ReceiptCreateWithoutPersonInput.schema';
import { ReceiptUncheckedCreateWithoutPersonInputObjectSchema } from './ReceiptUncheckedCreateWithoutPersonInput.schema';
import { ReceiptCreateOrConnectWithoutPersonInputObjectSchema } from './ReceiptCreateOrConnectWithoutPersonInput.schema';
import { ReceiptCreateManyPersonInputEnvelopeObjectSchema } from './ReceiptCreateManyPersonInputEnvelope.schema';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUncheckedCreateNestedManyWithoutPersonInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => ReceiptCreateWithoutPersonInputObjectSchema),
            z.lazy(() => ReceiptCreateWithoutPersonInputObjectSchema).array(),
            z.lazy(() => ReceiptUncheckedCreateWithoutPersonInputObjectSchema),
            z
              .lazy(() => ReceiptUncheckedCreateWithoutPersonInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => ReceiptCreateOrConnectWithoutPersonInputObjectSchema),
            z
              .lazy(() => ReceiptCreateOrConnectWithoutPersonInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => ReceiptCreateManyPersonInputEnvelopeObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
            z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const ReceiptUncheckedCreateNestedManyWithoutPersonInputObjectSchema =
  Schema;
