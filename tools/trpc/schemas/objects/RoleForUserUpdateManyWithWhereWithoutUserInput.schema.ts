import { z } from 'zod';
import { RoleForUserScalarWhereInputObjectSchema } from './RoleForUserScalarWhereInput.schema';
import { RoleForUserUpdateManyMutationInputObjectSchema } from './RoleForUserUpdateManyMutationInput.schema';
import { RoleForUserUncheckedUpdateManyWithoutRoleForUserInputObjectSchema } from './RoleForUserUncheckedUpdateManyWithoutRoleForUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => RoleForUserScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RoleForUserUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            RoleForUserUncheckedUpdateManyWithoutRoleForUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RoleForUserUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
