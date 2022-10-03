import { createRouter } from "./helpers/createRouter";
import { RoleFindUniqueSchema } from "../schemas/findUniqueRole.schema";
import { RoleFindFirstSchema } from "../schemas/findFirstRole.schema";
import { RoleFindManySchema } from "../schemas/findManyRole.schema";
import { RoleCreateOneSchema } from "../schemas/createOneRole.schema";
import { RoleCreateManySchema } from "../schemas/createManyRole.schema";
import { RoleDeleteOneSchema } from "../schemas/deleteOneRole.schema";
import { RoleUpdateOneSchema } from "../schemas/updateOneRole.schema";
import { RoleDeleteManySchema } from "../schemas/deleteManyRole.schema";
import { RoleUpdateManySchema } from "../schemas/updateManyRole.schema";
import { RoleUpsertSchema } from "../schemas/upsertOneRole.schema";
import { RoleAggregateSchema } from "../schemas/aggregateRole.schema";
import { RoleGroupBySchema } from "../schemas/groupByRole.schema";

export const rolesRouter = createRouter()

  .query("aggregateRole", {
    input: RoleAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateRole = await ctx.prisma.role.aggregate(input);
      return aggregateRole;
    },
  })

  .mutation("createManyRole", {
    input: RoleCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyRole = await ctx.prisma.role.createMany({ data: input.data });
      return createManyRole;
    },
  })

  .mutation("createOneRole", {
    input: RoleCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneRole = await ctx.prisma.role.create({ data: input.data });
      return createOneRole;
    },
  })

  .mutation("deleteManyRole", {
    input: RoleDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyRole = await ctx.prisma.role.deleteMany(input);
      return deleteManyRole;
    },
  })

  .mutation("deleteOneRole", {
    input: RoleDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneRole = await ctx.prisma.role.delete({ where: input.where });
      return deleteOneRole;
    },
  })

  .query("findFirstRole", {
    input: RoleFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstRole = await ctx.prisma.role.findFirst(input);
      return findFirstRole;
    },
  })

  .query("findManyRole", {
    input: RoleFindManySchema,
    async resolve({ ctx, input }) {
      const findManyRole = await ctx.prisma.role.findMany(input);
      return findManyRole;
    },
  })

  .query("findUniqueRole", {
    input: RoleFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueRole = await ctx.prisma.role.findUnique({ where: input.where });
      return findUniqueRole;
    },
  })

  .query("groupByRole", {
    input: RoleGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByRole = await ctx.prisma.role.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByRole;
    },
  })

  .mutation("updateManyRole", {
    input: RoleUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyRole = await ctx.prisma.role.updateMany(input);
      return updateManyRole;
    },
  })

  .mutation("updateOneRole", {
    input: RoleUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneRole = await ctx.prisma.role.update({ where: input.where, data: input.data });
      return updateOneRole;
    },
  })

  .mutation("upsertOneRole", {
    input: RoleUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneRole = await ctx.prisma.role.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneRole;
    },
  })
