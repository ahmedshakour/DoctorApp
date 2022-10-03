import { z } from 'zod';
import { RoleForUserCreateManyUserInputObjectSchema } from './RoleForUserCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => RoleForUserCreateManyUserInputObjectSchema).array(),
  })
  .strict();

export const RoleForUserCreateManyUserInputEnvelopeObjectSchema = Schema;
