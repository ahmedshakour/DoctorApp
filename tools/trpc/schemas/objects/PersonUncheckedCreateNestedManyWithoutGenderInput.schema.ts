import { z } from 'zod';
import { PersonCreateWithoutGenderInputObjectSchema } from './PersonCreateWithoutGenderInput.schema';
import { PersonUncheckedCreateWithoutGenderInputObjectSchema } from './PersonUncheckedCreateWithoutGenderInput.schema';
import { PersonCreateOrConnectWithoutGenderInputObjectSchema } from './PersonCreateOrConnectWithoutGenderInput.schema';
import { PersonCreateManyGenderInputEnvelopeObjectSchema } from './PersonCreateManyGenderInputEnvelope.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUncheckedCreateNestedManyWithoutGenderInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => PersonCreateWithoutGenderInputObjectSchema),
            z.lazy(() => PersonCreateWithoutGenderInputObjectSchema).array(),
            z.lazy(() => PersonUncheckedCreateWithoutGenderInputObjectSchema),
            z
              .lazy(() => PersonUncheckedCreateWithoutGenderInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => PersonCreateOrConnectWithoutGenderInputObjectSchema),
            z
              .lazy(() => PersonCreateOrConnectWithoutGenderInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => PersonCreateManyGenderInputEnvelopeObjectSchema)
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

export const PersonUncheckedCreateNestedManyWithoutGenderInputObjectSchema =
  Schema;
