import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithoutGenderInputObjectSchema } from './PersonUpdateWithoutGenderInput.schema';
import { PersonUncheckedUpdateWithoutGenderInputObjectSchema } from './PersonUncheckedUpdateWithoutGenderInput.schema';
import { PersonCreateWithoutGenderInputObjectSchema } from './PersonCreateWithoutGenderInput.schema';
import { PersonUncheckedCreateWithoutGenderInputObjectSchema } from './PersonUncheckedCreateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpsertWithWhereUniqueWithoutGenderInput> =
  z
    .object({
      where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PersonUpdateWithoutGenderInputObjectSchema),
        z.lazy(() => PersonUncheckedUpdateWithoutGenderInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PersonCreateWithoutGenderInputObjectSchema),
        z.lazy(() => PersonUncheckedCreateWithoutGenderInputObjectSchema),
      ]),
    })
    .strict();

export const PersonUpsertWithWhereUniqueWithoutGenderInputObjectSchema = Schema;
