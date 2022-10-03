import { z } from 'zod';
import { PersonCreateWithoutUserInputObjectSchema } from './PersonCreateWithoutUserInput.schema';
import { PersonUncheckedCreateWithoutUserInputObjectSchema } from './PersonUncheckedCreateWithoutUserInput.schema';
import { PersonCreateOrConnectWithoutUserInputObjectSchema } from './PersonCreateOrConnectWithoutUserInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateNestedManyWithoutUserInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => PersonCreateWithoutUserInputObjectSchema),
            z.lazy(() => PersonCreateWithoutUserInputObjectSchema).array(),
            z.lazy(() => PersonUncheckedCreateWithoutUserInputObjectSchema),
            z
              .lazy(() => PersonUncheckedCreateWithoutUserInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => PersonCreateOrConnectWithoutUserInputObjectSchema),
            z
              .lazy(() => PersonCreateOrConnectWithoutUserInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => PersonWhereUniqueInputObjectSchema),
            z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const PersonCreateNestedManyWithoutUserInputObjectSchema = Schema;
