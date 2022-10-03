import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonCreateWithoutUserInputObjectSchema } from './PersonCreateWithoutUserInput.schema';
import { PersonUncheckedCreateWithoutUserInputObjectSchema } from './PersonUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PersonCreateWithoutUserInputObjectSchema),
      z.lazy(() => PersonUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const PersonCreateOrConnectWithoutUserInputObjectSchema = Schema;
