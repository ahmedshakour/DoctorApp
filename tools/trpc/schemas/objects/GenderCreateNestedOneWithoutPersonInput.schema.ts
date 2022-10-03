import { z } from 'zod';
import { GenderCreateWithoutPersonInputObjectSchema } from './GenderCreateWithoutPersonInput.schema';
import { GenderUncheckedCreateWithoutPersonInputObjectSchema } from './GenderUncheckedCreateWithoutPersonInput.schema';
import { GenderCreateOrConnectWithoutPersonInputObjectSchema } from './GenderCreateOrConnectWithoutPersonInput.schema';
import { GenderWhereUniqueInputObjectSchema } from './GenderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderCreateNestedOneWithoutPersonInput> =
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
        connect: z.lazy(() => GenderWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const GenderCreateNestedOneWithoutPersonInputObjectSchema = Schema;
