import { z } from 'zod';
import { PersonScalarWhereInputObjectSchema } from './PersonScalarWhereInput.schema';
import { PersonUpdateManyMutationInputObjectSchema } from './PersonUpdateManyMutationInput.schema';
import { PersonUncheckedUpdateManyWithoutPersonInputObjectSchema } from './PersonUncheckedUpdateManyWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => PersonScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PersonUpdateManyMutationInputObjectSchema),
      z.lazy(() => PersonUncheckedUpdateManyWithoutPersonInputObjectSchema),
    ]),
  })
  .strict();

export const PersonUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
