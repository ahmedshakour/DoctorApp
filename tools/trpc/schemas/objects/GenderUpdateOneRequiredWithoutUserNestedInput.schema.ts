import { z } from 'zod';
import { GenderCreateWithoutUserInputObjectSchema } from './GenderCreateWithoutUserInput.schema';
import { GenderUncheckedCreateWithoutUserInputObjectSchema } from './GenderUncheckedCreateWithoutUserInput.schema';
import { GenderCreateOrConnectWithoutUserInputObjectSchema } from './GenderCreateOrConnectWithoutUserInput.schema';
import { GenderUpsertWithoutUserInputObjectSchema } from './GenderUpsertWithoutUserInput.schema';
import { GenderWhereUniqueInputObjectSchema } from './GenderWhereUniqueInput.schema';
import { GenderUpdateWithoutUserInputObjectSchema } from './GenderUpdateWithoutUserInput.schema';
import { GenderUncheckedUpdateWithoutUserInputObjectSchema } from './GenderUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderUpdateOneRequiredWithoutUserNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => GenderCreateWithoutUserInputObjectSchema),
            z.lazy(() => GenderUncheckedCreateWithoutUserInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => GenderCreateOrConnectWithoutUserInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => GenderUpsertWithoutUserInputObjectSchema)
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
            z.lazy(() => GenderUpdateWithoutUserInputObjectSchema),
            z.lazy(() => GenderUncheckedUpdateWithoutUserInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const GenderUpdateOneRequiredWithoutUserNestedInputObjectSchema = Schema;
