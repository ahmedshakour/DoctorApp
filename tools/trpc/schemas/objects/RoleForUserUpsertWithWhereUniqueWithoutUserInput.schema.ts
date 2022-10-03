import { z } from 'zod';
import { RoleForUserWhereUniqueInputObjectSchema } from './RoleForUserWhereUniqueInput.schema';
import { RoleForUserUpdateWithoutUserInputObjectSchema } from './RoleForUserUpdateWithoutUserInput.schema';
import { RoleForUserUncheckedUpdateWithoutUserInputObjectSchema } from './RoleForUserUncheckedUpdateWithoutUserInput.schema';
import { RoleForUserCreateWithoutUserInputObjectSchema } from './RoleForUserCreateWithoutUserInput.schema';
import { RoleForUserUncheckedCreateWithoutUserInputObjectSchema } from './RoleForUserUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => RoleForUserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RoleForUserUpdateWithoutUserInputObjectSchema),
        z.lazy(() => RoleForUserUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RoleForUserCreateWithoutUserInputObjectSchema),
        z.lazy(() => RoleForUserUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const RoleForUserUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
