import { z } from 'zod';
import { GenderCreateWithoutPersonInputObjectSchema } from './GenderCreateWithoutPersonInput.schema';
import { GenderUncheckedCreateWithoutPersonInputObjectSchema } from './GenderUncheckedCreateWithoutPersonInput.schema';
import { GenderCreateOrConnectWithoutPersonInputObjectSchema } from './GenderCreateOrConnectWithoutPersonInput.schema';
import { GenderUpsertWithoutPersonInputObjectSchema } from './GenderUpsertWithoutPersonInput.schema';
import { GenderWhereUniqueInputObjectSchema } from './GenderWhereUniqueInput.schema';
import { GenderUpdateWithoutPersonInputObjectSchema } from './GenderUpdateWithoutPersonInput.schema';
import { GenderUncheckedUpdateWithoutPersonInputObjectSchema } from './GenderUncheckedUpdateWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderUpdateOneRequiredWithoutPersonNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => GenderCreateWithoutPersonInputObjectSchema),
            z.lazy(() => GenderUncheckedCreateWithoutPersonInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => GenderCreateOrConnectWithoutPersonInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => GenderUpsertWithoutPersonInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => GenderWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => GenderUpdateWithoutPersonInputObjectSchema),
            z.lazy(() => GenderUncheckedUpdateWithoutPersonInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const GenderUpdateOneRequiredWithoutPersonNestedInputObjectSchema =
  Schema;
