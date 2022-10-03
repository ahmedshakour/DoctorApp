import { z } from 'zod';
import { PersonCreateWithoutReceiptInputObjectSchema } from './PersonCreateWithoutReceiptInput.schema';
import { PersonUncheckedCreateWithoutReceiptInputObjectSchema } from './PersonUncheckedCreateWithoutReceiptInput.schema';
import { PersonCreateOrConnectWithoutReceiptInputObjectSchema } from './PersonCreateOrConnectWithoutReceiptInput.schema';
import { PersonUpsertWithoutReceiptInputObjectSchema } from './PersonUpsertWithoutReceiptInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithoutReceiptInputObjectSchema } from './PersonUpdateWithoutReceiptInput.schema';
import { PersonUncheckedUpdateWithoutReceiptInputObjectSchema } from './PersonUncheckedUpdateWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateOneWithoutReceiptNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => PersonCreateWithoutReceiptInputObjectSchema),
            z.lazy(() => PersonUncheckedCreateWithoutReceiptInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => PersonCreateOrConnectWithoutReceiptInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => PersonUpsertWithoutReceiptInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => PersonWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => PersonUpdateWithoutReceiptInputObjectSchema),
            z.lazy(() => PersonUncheckedUpdateWithoutReceiptInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const PersonUpdateOneWithoutReceiptNestedInputObjectSchema = Schema;
