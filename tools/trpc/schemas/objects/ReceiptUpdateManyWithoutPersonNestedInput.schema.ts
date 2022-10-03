import { z } from 'zod';
import { ReceiptCreateWithoutPersonInputObjectSchema } from './ReceiptCreateWithoutPersonInput.schema';
import { ReceiptUncheckedCreateWithoutPersonInputObjectSchema } from './ReceiptUncheckedCreateWithoutPersonInput.schema';
import { ReceiptCreateOrConnectWithoutPersonInputObjectSchema } from './ReceiptCreateOrConnectWithoutPersonInput.schema';
import { ReceiptUpsertWithWhereUniqueWithoutPersonInputObjectSchema } from './ReceiptUpsertWithWhereUniqueWithoutPersonInput.schema';
import { ReceiptCreateManyPersonInputEnvelopeObjectSchema } from './ReceiptCreateManyPersonInputEnvelope.schema';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptUpdateWithWhereUniqueWithoutPersonInputObjectSchema } from './ReceiptUpdateWithWhereUniqueWithoutPersonInput.schema';
import { ReceiptUpdateManyWithWhereWithoutPersonInputObjectSchema } from './ReceiptUpdateManyWithWhereWithoutPersonInput.schema';
import { ReceiptScalarWhereInputObjectSchema } from './ReceiptScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpdateManyWithoutPersonNestedInput> =
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
        upsert: z
          .union([
            z.lazy(
              () => ReceiptUpsertWithWhereUniqueWithoutPersonInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  ReceiptUpsertWithWhereUniqueWithoutPersonInputObjectSchema,
              )
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
        set: z
          .union([
            z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
            z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
            z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
            z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
          ])
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
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => ReceiptUpdateWithWhereUniqueWithoutPersonInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  ReceiptUpdateWithWhereUniqueWithoutPersonInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        updateMany: z
          .union([
            z.lazy(
              () => ReceiptUpdateManyWithWhereWithoutPersonInputObjectSchema,
            ),
            z
              .lazy(
                () => ReceiptUpdateManyWithWhereWithoutPersonInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => ReceiptScalarWhereInputObjectSchema),
            z.lazy(() => ReceiptScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const ReceiptUpdateManyWithoutPersonNestedInputObjectSchema = Schema;
