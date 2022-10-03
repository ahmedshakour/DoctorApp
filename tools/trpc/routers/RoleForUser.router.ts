import { createRouter } from "./helpers/createRouter";
import { RoleForUserFindUniqueSchema } from "../schemas/findUniqueRoleForUser.schema";
import { RoleForUserFindFirstSchema } from "../schemas/findFirstRoleForUser.schema";
import { RoleForUserFindManySchema } from "../schemas/findManyRoleForUser.schema";
import { RoleForUserCreateOneSchema } from "../schemas/createOneRoleForUser.schema";
import { RoleForUserCreateManySchema } from "../schemas/createManyRoleForUser.schema";
import { RoleForUserDeleteOneSchema } from "../schemas/deleteOneRoleForUser.schema";
import { RoleForUserUpdateOneSchema } from "../schemas/updateOneRoleForUser.schema";
import { RoleForUserDeleteManySchema } from "../schemas/deleteManyRoleForUser.schema";
import { RoleForUserUpdateManySchema } from "../schemas/updateManyRoleForUser.schema";
import { RoleForUserUpsertSchema } from "../schemas/upsertOneRoleForUser.schema";
import { RoleForUserAggregateSchema } from "../schemas/aggregateRoleForUser.schema";
import { RoleForUserGroupBySchema } from "../schemas/groupByRoleForUser.schema";

export const roleforusersRouter = createRouter()

  .query("aggregateRoleForUser", {
    input: RoleForUserAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateRoleForUser = await ctx.prisma.roleForUser.aggregate(input);
      return aggregateRoleForUser;
    },
  })

  .mutation("createManyRoleForUser", {
    input: RoleForUserCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyRoleForUser = await ctx.prisma.roleForUser.createMany({ data: input.data });
      return createManyRoleForUser;
    },
  })

  .mutation("createOneRoleForUser", {
    input: RoleForUserCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneRoleForUser = await ctx.prisma.roleForUser.create({ data: input.data });
      return createOneRoleForUser;
    },
  })

  .mutation("deleteManyRoleForUser", {
    input: RoleForUserDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyRoleForUser = await ctx.prisma.roleForUser.deleteMany(input);
      return deleteManyRoleForUser;
    },
  })

  .mutation("deleteOneRoleForUser", {
    input: RoleForUserDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneRoleForUser = await ctx.prisma.roleForUser.delete({ where: input.where });
      return deleteOneRoleForUser;
    },
  })

  .query("findFirstRoleForUser", {
    input: RoleForUserFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstRoleForUser = await ctx.prisma.roleForUser.findFirst(input);
      return findFirstRoleForUser;
    },
  })

  .query("findManyRoleForUser", {
    input: RoleForUserFindManySchema,
    async resolve({ ctx, input }) {
      const findManyRoleForUser = await ctx.prisma.roleForUser.findMany(input);
      return findManyRoleForUser;
    },
  })

  .query("findUniqueRoleForUser", {
    input: RoleForUserFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueRoleForUser = await ctx.prisma.roleForUser.findUnique({ where: input.where });
      return findUniqueRoleForUser;
    },
  })

  .query("groupByRoleForUser", {
    input: RoleForUserGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByRoleForUser = await ctx.prisma.roleForUser.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByRoleForUser;
    },
  })

  .mutation("updateManyRoleForUser", {
    input: RoleForUserUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyRoleForUser = await ctx.prisma.roleForUser.updateMany(input);
      return updateManyRoleForUser;
    },
  })

  .mutation("updateOneRoleForUser", {
    input: RoleForUserUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneRoleForUser = await ctx.prisma.roleForUser.update({ where: input.where, data: input.data });
      return updateOneRoleForUser;
    },
  })

  .mutation("upsertOneRoleForUser", {
    input: RoleForUserUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneRoleForUser = await ctx.prisma.roleForUser.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneRoleForUser;
    },
  })
