import { z } from 'zod';
import { UserUpdateWithoutRoleForUserInputObjectSchema } from './UserUpdateWithoutRoleForUserInput.schema';
import { UserUncheckedUpdateWithoutRoleForUserInputObjectSchema } from './UserUncheckedUpdateWithoutRoleForUserInput.schema';
import { UserCreateWithoutRoleForUserInputObjectSchema } from './UserCreateWithoutRoleForUserInput.schema';
import { UserUncheckedCreateWithoutRoleForUserInputObjectSchema } from './UserUncheckedCreateWithoutRoleForUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutRoleForUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutRoleForUserInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutRoleForUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutRoleForUserInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutRoleForUserInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutRoleForUserInputObjectSchema = Schema;
