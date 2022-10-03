import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PersonUpdateManyWithoutUserNestedInputObjectSchema } from './PersonUpdateManyWithoutUserNestedInput.schema';
import { GenderUpdateOneRequiredWithoutUserNestedInputObjectSchema } from './GenderUpdateOneRequiredWithoutUserNestedInput.schema';
import { RoleForUserUpdateManyWithoutUserNestedInputObjectSchema } from './RoleForUserUpdateManyWithoutUserNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithoutReceiptInput> = z
  .object({
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    password: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    displayname: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    provider: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    person: z
      .lazy(() => PersonUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    gender: z
      .lazy(() => GenderUpdateOneRequiredWithoutUserNestedInputObjectSchema)
      .optional(),
    roleForUser: z
      .lazy(() => RoleForUserUpdateManyWithoutUserNestedInputObjectSchema)
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

export const UserUpdateWithoutReceiptInputObjectSchema = Schema;
