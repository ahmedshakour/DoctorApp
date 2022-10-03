import { z } from 'zod';
import { RoleForUserWhereUniqueInputObjectSchema } from './RoleForUserWhereUniqueInput.schema';
import { RoleForUserUpdateWithoutUserInputObjectSchema } from './RoleForUserUpdateWithoutUserInput.schema';
import { RoleForUserUncheckedUpdateWithoutUserInputObjectSchema } from './RoleForUserUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => RoleForUserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RoleForUserUpdateWithoutUserInputObjectSchema),
        z.lazy(() => RoleForUserUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const RoleForUserUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
