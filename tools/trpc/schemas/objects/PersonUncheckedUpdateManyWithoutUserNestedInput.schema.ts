import { z } from 'zod';
import { PersonCreateWithoutUserInputObjectSchema } from './PersonCreateWithoutUserInput.schema';
import { PersonUncheckedCreateWithoutUserInputObjectSchema } from './PersonUncheckedCreateWithoutUserInput.schema';
import { PersonCreateOrConnectWithoutUserInputObjectSchema } from './PersonCreateOrConnectWithoutUserInput.schema';
import { PersonUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PersonUpsertWithWhereUniqueWithoutUserInput.schema';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PersonUpdateWithWhereUniqueWithoutUserInput.schema';
import { PersonUpdateManyWithWhereWithoutUserInputObjectSchema } from './PersonUpdateManyWithWhereWithoutUserInput.schema';
import { PersonScalarWhereInputObjectSchema } from './PersonScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUncheckedUpdateManyWithoutUserNestedInput> =
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
        upsert: z
          .union([
            z.lazy(
              () => PersonUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            ),
            z
              .lazy(
                () => PersonUpsertWithWhereUniqueWithoutUserInputObjectSchema,
              )
              .array(),
          ])
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
              () => PersonUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            ),
            z
              .lazy(
                () => PersonUpdateWithWhereUniqueWithoutUserInputObjectSchema,
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
            z.lazy(() => PersonUpdateManyWithWhereWithoutUserInputObjectSchema),
            z
              .lazy(() => PersonUpdateManyWithWhereWithoutUserInputObjectSchema)
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

export const PersonUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
