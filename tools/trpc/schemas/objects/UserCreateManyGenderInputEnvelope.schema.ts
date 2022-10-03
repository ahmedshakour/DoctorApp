import { z } from 'zod';
import { UserCreateManyGenderInputObjectSchema } from './UserCreateManyGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyGenderInputEnvelope> = z
  .object({
    data: z.lazy(() => UserCreateManyGenderInputObjectSchema).array(),
  })
  .strict();

export const UserCreateManyGenderInputEnvelopeObjectSchema = Schema;
