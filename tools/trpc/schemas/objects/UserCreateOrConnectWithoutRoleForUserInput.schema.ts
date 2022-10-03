import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutRoleForUserInputObjectSchema } from './UserCreateWithoutRoleForUserInput.schema';
import { UserUncheckedCreateWithoutRoleForUserInputObjectSchema } from './UserUncheckedCreateWithoutRoleForUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutRoleForUserInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutRoleForUserInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutRoleForUserInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutRoleForUserInputObjectSchema = Schema;
