import { createRouter } from "./helpers/createRouter";
import { GenderFindUniqueSchema } from "../schemas/findUniqueGender.schema";
import { GenderFindFirstSchema } from "../schemas/findFirstGender.schema";
import { GenderFindManySchema } from "../schemas/findManyGender.schema";
import { GenderCreateOneSchema } from "../schemas/createOneGender.schema";
import { GenderCreateManySchema } from "../schemas/createManyGender.schema";
import { GenderDeleteOneSchema } from "../schemas/deleteOneGender.schema";
import { GenderUpdateOneSchema } from "../schemas/updateOneGender.schema";
import { GenderDeleteManySchema } from "../schemas/deleteManyGender.schema";
import { GenderUpdateManySchema } from "../schemas/updateManyGender.schema";
import { GenderUpsertSchema } from "../schemas/upsertOneGender.schema";
import { GenderAggregateSchema } from "../schemas/aggregateGender.schema";
import { GenderGroupBySchema } from "../schemas/groupByGender.schema";

export const gendersRouter = createRouter()

  .query("aggregateGender", {
    input: GenderAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateGender = await ctx.prisma.gender.aggregate(input);
      return aggregateGender;
    },
  })

  .mutation("createManyGender", {
    input: GenderCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyGender = await ctx.prisma.gender.createMany({ data: input.data });
      return createManyGender;
    },
  })

  .mutation("createOneGender", {
    input: GenderCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneGender = await ctx.prisma.gender.create({ data: input.data });
      return createOneGender;
    },
  })

  .mutation("deleteManyGender", {
    input: GenderDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyGender = await ctx.prisma.gender.deleteMany(input);
      return deleteManyGender;
    },
  })

  .mutation("deleteOneGender", {
    input: GenderDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneGender = await ctx.prisma.gender.delete({ where: input.where });
      return deleteOneGender;
    },
  })

  .query("findFirstGender", {
    input: GenderFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstGender = await ctx.prisma.gender.findFirst(input);
      return findFirstGender;
    },
  })

  .query("findManyGender", {
    input: GenderFindManySchema,
    async resolve({ ctx, input }) {
      const findManyGender = await ctx.prisma.gender.findMany(input);
      return findManyGender;
    },
  })

  .query("findUniqueGender", {
    input: GenderFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueGender = await ctx.prisma.gender.findUnique({ where: input.where });
      return findUniqueGender;
    },
  })

  .query("groupByGender", {
    input: GenderGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByGender = await ctx.prisma.gender.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByGender;
    },
  })

  .mutation("updateManyGender", {
    input: GenderUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyGender = await ctx.prisma.gender.updateMany(input);
      return updateManyGender;
    },
  })

  .mutation("updateOneGender", {
    input: GenderUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneGender = await ctx.prisma.gender.update({ where: input.where, data: input.data });
      return updateOneGender;
    },
  })

  .mutation("upsertOneGender", {
    input: GenderUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneGender = await ctx.prisma.gender.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneGender;
    },
  })
