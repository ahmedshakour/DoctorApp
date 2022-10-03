import { z } from 'zod';
import { RoleForUserScalarWhereInputObjectSchema } from './RoleForUserScalarWhereInput.schema';
import { RoleForUserUpdateManyMutationInputObjectSchema } from './RoleForUserUpdateManyMutationInput.schema';
import { RoleForUserUncheckedUpdateManyWithoutRoleForPersonInputObjectSchema } from './RoleForUserUncheckedUpdateManyWithoutRoleForPersonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserUpdateManyWithWhereWithoutRoleInput> =
  z
    .object({
      where: z.lazy(() => RoleForUserScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RoleForUserUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            RoleForUserUncheckedUpdateManyWithoutRoleForPersonInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RoleForUserUpdateManyWithWhereWithoutRoleInputObjectSchema =
  Schema;
