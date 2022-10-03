import { createRouter } from "./helpers/createRouter";
import { ReceiptFindUniqueSchema } from "../schemas/findUniqueReceipt.schema";
import { ReceiptFindFirstSchema } from "../schemas/findFirstReceipt.schema";
import { ReceiptFindManySchema } from "../schemas/findManyReceipt.schema";
import { ReceiptCreateOneSchema } from "../schemas/createOneReceipt.schema";
import { ReceiptCreateManySchema } from "../schemas/createManyReceipt.schema";
import { ReceiptDeleteOneSchema } from "../schemas/deleteOneReceipt.schema";
import { ReceiptUpdateOneSchema } from "../schemas/updateOneReceipt.schema";
import { ReceiptDeleteManySchema } from "../schemas/deleteManyReceipt.schema";
import { ReceiptUpdateManySchema } from "../schemas/updateManyReceipt.schema";
import { ReceiptUpsertSchema } from "../schemas/upsertOneReceipt.schema";
import { ReceiptAggregateSchema } from "../schemas/aggregateReceipt.schema";
import { ReceiptGroupBySchema } from "../schemas/groupByReceipt.schema";

export const receiptsRouter = createRouter()

  .query("aggregateReceipt", {
    input: ReceiptAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateReceipt = await ctx.prisma.receipt.aggregate(input);
      return aggregateReceipt;
    },
  })

  .mutation("createManyReceipt", {
    input: ReceiptCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyReceipt = await ctx.prisma.receipt.createMany({ data: input.data });
      return createManyReceipt;
    },
  })

  .mutation("createOneReceipt", {
    input: ReceiptCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneReceipt = await ctx.prisma.receipt.create({ data: input.data });
      return createOneReceipt;
    },
  })

  .mutation("deleteManyReceipt", {
    input: ReceiptDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyReceipt = await ctx.prisma.receipt.deleteMany(input);
      return deleteManyReceipt;
    },
  })

  .mutation("deleteOneReceipt", {
    input: ReceiptDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneReceipt = await ctx.prisma.receipt.delete({ where: input.where });
      return deleteOneReceipt;
    },
  })

  .query("findFirstReceipt", {
    input: ReceiptFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstReceipt = await ctx.prisma.receipt.findFirst(input);
      return findFirstReceipt;
    },
  })

  .query("findManyReceipt", {
    input: ReceiptFindManySchema,
    async resolve({ ctx, input }) {
      const findManyReceipt = await ctx.prisma.receipt.findMany(input);
      return findManyReceipt;
    },
  })

  .query("findUniqueReceipt", {
    input: ReceiptFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueReceipt = await ctx.prisma.receipt.findUnique({ where: input.where });
      return findUniqueReceipt;
    },
  })

  .query("groupByReceipt", {
    input: ReceiptGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByReceipt = await ctx.prisma.receipt.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByReceipt;
    },
  })

  .mutation("updateManyReceipt", {
    input: ReceiptUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyReceipt = await ctx.prisma.receipt.updateMany(input);
      return updateManyReceipt;
    },
  })

  .mutation("updateOneReceipt", {
    input: ReceiptUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneReceipt = await ctx.prisma.receipt.update({ where: input.where, data: input.data });
      return updateOneReceipt;
    },
  })

  .mutation("upsertOneReceipt", {
    input: ReceiptUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneReceipt = await ctx.prisma.receipt.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneReceipt;
    },
  })
