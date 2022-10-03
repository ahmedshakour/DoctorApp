import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutGenderNestedInputObjectSchema } from './UserUpdateManyWithoutGenderNestedInput.schema';
import { PersonUpdateManyWithoutGenderNestedInputObjectSchema } from './PersonUpdateManyWithoutGenderNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderUpdateInput> = z
  .object({
    type: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    user: z
      .lazy(() => UserUpdateManyWithoutGenderNestedInputObjectSchema)
      .optional(),
    Person: z
      .lazy(() => PersonUpdateManyWithoutGenderNestedInputObjectSchema)
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

export const GenderUpdateInputObjectSchema = Schema;
