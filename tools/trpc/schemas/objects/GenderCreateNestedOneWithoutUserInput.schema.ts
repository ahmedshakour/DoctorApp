import { z } from 'zod';
import { GenderCreateWithoutUserInputObjectSchema } from './GenderCreateWithoutUserInput.schema';
import { GenderUncheckedCreateWithoutUserInputObjectSchema } from './GenderUncheckedCreateWithoutUserInput.schema';
import { GenderCreateOrConnectWithoutUserInputObjectSchema } from './GenderCreateOrConnectWithoutUserInput.schema';
import { GenderWhereUniqueInputObjectSchema } from './GenderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderCreateNestedOneWithoutUserInput> = z.union(
  [
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
        connect: z.lazy(() => GenderWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ],
);

export const GenderCreateNestedOneWithoutUserInputObjectSchema = Schema;
