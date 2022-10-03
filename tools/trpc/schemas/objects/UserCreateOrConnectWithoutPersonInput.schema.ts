import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPersonInputObjectSchema } from './UserCreateWithoutPersonInput.schema';
import { UserUncheckedCreateWithoutPersonInputObjectSchema } from './UserUncheckedCreateWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutPersonInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutPersonInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPersonInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutPersonInputObjectSchema = Schema;
