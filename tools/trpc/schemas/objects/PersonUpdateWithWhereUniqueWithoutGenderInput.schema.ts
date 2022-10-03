import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithoutGenderInputObjectSchema } from './PersonUpdateWithoutGenderInput.schema';
import { PersonUncheckedUpdateWithoutGenderInputObjectSchema } from './PersonUncheckedUpdateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateWithWhereUniqueWithoutGenderInput> =
  z
    .object({
      where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PersonUpdateWithoutGenderInputObjectSchema),
        z.lazy(() => PersonUncheckedUpdateWithoutGenderInputObjectSchema),
      ]),
    })
    .strict();

export const PersonUpdateWithWhereUniqueWithoutGenderInputObjectSchema = Schema;
