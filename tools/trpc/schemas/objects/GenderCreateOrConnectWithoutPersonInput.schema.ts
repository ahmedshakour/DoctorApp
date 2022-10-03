import { z } from 'zod';
import { GenderWhereUniqueInputObjectSchema } from './GenderWhereUniqueInput.schema';
import { GenderCreateWithoutPersonInputObjectSchema } from './GenderCreateWithoutPersonInput.schema';
import { GenderUncheckedCreateWithoutPersonInputObjectSchema } from './GenderUncheckedCreateWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderCreateOrConnectWithoutPersonInput> = z
  .object({
    where: z.lazy(() => GenderWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => GenderCreateWithoutPersonInputObjectSchema),
      z.lazy(() => GenderUncheckedCreateWithoutPersonInputObjectSchema),
    ]),
  })
  .strict();

export const GenderCreateOrConnectWithoutPersonInputObjectSchema = Schema;
