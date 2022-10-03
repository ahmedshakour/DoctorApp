import { z } from 'zod';
import { PersonWhereUniqueInputObjectSchema } from './PersonWhereUniqueInput.schema';
import { PersonCreateWithoutGenderInputObjectSchema } from './PersonCreateWithoutGenderInput.schema';
import { PersonUncheckedCreateWithoutGenderInputObjectSchema } from './PersonUncheckedCreateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateOrConnectWithoutGenderInput> = z
  .object({
    where: z.lazy(() => PersonWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PersonCreateWithoutGenderInputObjectSchema),
      z.lazy(() => PersonUncheckedCreateWithoutGenderInputObjectSchema),
    ]),
  })
  .strict();

export const PersonCreateOrConnectWithoutGenderInputObjectSchema = Schema;
