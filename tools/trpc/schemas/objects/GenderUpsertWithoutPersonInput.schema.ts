import { z } from 'zod';
import { GenderUpdateWithoutPersonInputObjectSchema } from './GenderUpdateWithoutPersonInput.schema';
import { GenderUncheckedUpdateWithoutPersonInputObjectSchema } from './GenderUncheckedUpdateWithoutPersonInput.schema';
import { GenderCreateWithoutPersonInputObjectSchema } from './GenderCreateWithoutPersonInput.schema';
import { GenderUncheckedCreateWithoutPersonInputObjectSchema } from './GenderUncheckedCreateWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderUpsertWithoutPersonInput> = z
  .object({
    update: z.union([
      z.lazy(() => GenderUpdateWithoutPersonInputObjectSchema),
      z.lazy(() => GenderUncheckedUpdateWithoutPersonInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => GenderCreateWithoutPersonInputObjectSchema),
      z.lazy(() => GenderUncheckedCreateWithoutPersonInputObjectSchema),
    ]),
  })
  .strict();

export const GenderUpsertWithoutPersonInputObjectSchema = Schema;
