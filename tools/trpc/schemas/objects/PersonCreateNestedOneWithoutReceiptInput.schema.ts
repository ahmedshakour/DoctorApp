import { z } from 'zod';
import { PersonCreateWithoutReceiptInputObjectSchema } from './PersonCreateWithoutReceiptInput.schema';
import { PersonUncheckedCreateWithoutReceiptInputObjectSchema } from './PersonUncheckedCreateWithoutReceiptInput.schema';
import { PersonCreateOrConnectWithoutReceiptInputObjectSchema } from './PersonCreateOrConnectWithoutReceiptInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateNestedOneWithoutReceiptInput> =
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
        connect: z.lazy(() => PersonWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const PersonCreateNestedOneWithoutReceiptInputObjectSchema = Schema;
