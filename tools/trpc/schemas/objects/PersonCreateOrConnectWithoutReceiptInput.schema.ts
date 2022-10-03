import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonCreateWithoutReceiptInputObjectSchema } from './PersonCreateWithoutReceiptInput.schema';
import { PersonUncheckedCreateWithoutReceiptInputObjectSchema } from './PersonUncheckedCreateWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateOrConnectWithoutReceiptInput> = z
  .object({
    where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PersonCreateWithoutReceiptInputObjectSchema),
      z.lazy(() => PersonUncheckedCreateWithoutReceiptInputObjectSchema),
    ]),
  })
  .strict();

export const PersonCreateOrConnectWithoutReceiptInputObjectSchema = Schema;
