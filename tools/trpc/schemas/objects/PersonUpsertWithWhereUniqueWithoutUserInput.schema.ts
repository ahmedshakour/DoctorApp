import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonUpdateWithoutUserInputObjectSchema } from './PersonUpdateWithoutUserInput.schema';
import { PersonUncheckedUpdateWithoutUserInputObjectSchema } from './PersonUncheckedUpdateWithoutUserInput.schema';
import { PersonCreateWithoutUserInputObjectSchema } from './PersonCreateWithoutUserInput.schema';
import { PersonUncheckedCreateWithoutUserInputObjectSchema } from './PersonUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PersonUpdateWithoutUserInputObjectSchema),
      z.lazy(() => PersonUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PersonCreateWithoutUserInputObjectSchema),
      z.lazy(() => PersonUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const PersonUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
