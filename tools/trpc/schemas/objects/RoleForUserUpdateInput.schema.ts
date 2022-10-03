import { z } from 'zod';
import { UserUpdateOneRequiredWithoutRoleForUserNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutRoleForUserNestedInput.schema';
import { RoleUpdateOneRequiredWithoutRoleForPersonNestedInputObjectSchema } from './RoleUpdateOneRequiredWithoutRoleForPersonNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleForUserUpdateInput> = z
  .object({
    user: z
      .lazy(
        () => UserUpdateOneRequiredWithoutRoleForUserNestedInputObjectSchema,
      )
      .optional(),
    role: z
      .lazy(
        () => RoleUpdateOneRequiredWithoutRoleForPersonNestedInputObjectSchema,
      )
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    isActive: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const RoleForUserUpdateInputObjectSchema = Schema;
