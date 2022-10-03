import { z } from 'zod';
import { PersonCreateManyGenderInputObjectSchema } from './PersonCreateManyGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonCreateManyGenderInputEnvelope> = z
  .object({
    data: z.lazy(() => PersonCreateManyGenderInputObjectSchema).array(),
  })
  .strict();

export const PersonCreateManyGenderInputEnvelopeObjectSchema = Schema;
