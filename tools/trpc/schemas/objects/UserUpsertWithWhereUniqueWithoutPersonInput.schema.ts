import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutPersonInputObjectSchema } from './UserUpdateWithoutPersonInput.schema';
import { UserUncheckedUpdateWithoutPersonInputObjectSchema } from './UserUncheckedUpdateWithoutPersonInput.schema';
import { UserCreateWithoutPersonInputObjectSchema } from './UserCreateWithoutPersonInput.schema';
import { UserUncheckedCreateWithoutPersonInputObjectSchema } from './UserUncheckedCreateWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutPersonInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => UserUpdateWithoutPersonInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPersonInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPersonInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPersonInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithWhereUniqueWithoutPersonInputObjectSchema = Schema;
