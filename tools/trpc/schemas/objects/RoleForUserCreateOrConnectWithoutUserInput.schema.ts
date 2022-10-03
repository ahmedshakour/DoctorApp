import { z } from 'zod';
import { RoleForUserWhereUniqueInputObjectSchema } from './RoleForUserWhereUniqueInput.schema';
import { RoleForUserCreateWithoutUserInputObjectSchema } from './RoleForUserCreateWithoutUserInput.schema';
import { RoleForUserUncheckedCreateWithoutUserInputObjectSchema } from './RoleForUserUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => RoleForUserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoleForUserCreateWithoutUserInputObjectSchema),
      z.lazy(() => RoleForUserUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const RoleForUserCreateOrConnectWithoutUserInputObjectSchema = Schema;
