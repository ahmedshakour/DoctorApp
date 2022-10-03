import { z } from 'zod';
import { RoleForUserCreateManyRoleInputObjectSchema } from './RoleForUserCreateManyRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserCreateManyRoleInputEnvelope> = z
  .object({
    data: z.lazy(() => RoleForUserCreateManyRoleInputObjectSchema).array(),
  })
  .strict();

export const RoleForUserCreateManyRoleInputEnvelopeObjectSchema = Schema;
