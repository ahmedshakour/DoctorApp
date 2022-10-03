import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithoutUserInputObjectSchema } from './PersonUpdateWithoutUserInput.schema';
import { PersonUncheckedUpdateWithoutUserInputObjectSchema } from './PersonUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PersonUpdateWithoutUserInputObjectSchema),
      z.lazy(() => PersonUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const PersonUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
