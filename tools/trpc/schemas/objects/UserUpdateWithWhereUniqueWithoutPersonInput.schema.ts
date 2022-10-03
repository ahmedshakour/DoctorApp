import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutPersonInputObjectSchema } from './UserUpdateWithoutPersonInput.schema';
import { UserUncheckedUpdateWithoutPersonInputObjectSchema } from './UserUncheckedUpdateWithoutPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutPersonInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateWithoutPersonInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPersonInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpdateWithWhereUniqueWithoutPersonInputObjectSchema = Schema;
