import { z } from 'zod';
import { PersonCreateWithoutGenderInputObjectSchema } from './PersonCreateWithoutGenderInput.schema';
import { PersonUncheckedCreateWithoutGenderInputObjectSchema } from './PersonUncheckedCreateWithoutGenderInput.schema';
import { PersonCreateOrConnectWithoutGenderInputObjectSchema } from './PersonCreateOrConnectWithoutGenderInput.schema';
import { PersonUpsertWithWhereUniqueWithoutGenderInputObjectSchema } from './PersonUpsertWithWhereUniqueWithoutGenderInput.schema';
import { PersonCreateManyGenderInputEnvelopeObjectSchema } from './PersonCreateManyGenderInputEnvelope.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithWhereUniqueWithoutGenderInputObjectSchema } from './PersonUpdateWithWhereUniqueWithoutGenderInput.schema';
import { PersonUpdateManyWithWhereWithoutGenderInputObjectSchema } from './PersonUpdateManyWithWhereWithoutGenderInput.schema';
import { PersonScalarWhereInputObjectSchema } from './PersonScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateManyWithoutGenderNestedInput> =
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
        upsert: z
          .union([
            z.lazy(
              () => PersonUpsertWithWhereUniqueWithoutGenderInputObjectSchema,
            ),
            z
              .lazy(
                () => PersonUpsertWithWhereUniqueWithoutGenderInputObjectSchema,
              )
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
        set: z
          .union([
            z.lazy(() => PersonWhereUniqueInputObjectSchema),
            z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => PersonWhereUniqueInputObjectSchema),
            z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => PersonWhereUniqueInputObjectSchema),
            z.lazy(() => PersonWhereUniqueInputObjectSchema).array(),
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
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => PersonUpdateWithWhereUniqueWithoutGenderInputObjectSchema,
            ),
            z
              .lazy(
                () => PersonUpdateWithWhereUniqueWithoutGenderInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        updateMany: z
          .union([
            z.lazy(
              () => PersonUpdateManyWithWhereWithoutGenderInputObjectSchema,
            ),
            z
              .lazy(
                () => PersonUpdateManyWithWhereWithoutGenderInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => PersonScalarWhereInputObjectSchema),
            z.lazy(() => PersonScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const PersonUpdateManyWithoutGenderNestedInputObjectSchema = Schema;
