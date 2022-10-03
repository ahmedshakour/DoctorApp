import { createRouter } from "./helpers/createRouter";
import { PersonFindUniqueSchema } from "../schemas/findUniquePerson.schema";
import { PersonFindFirstSchema } from "../schemas/findFirstPerson.schema";
import { PersonFindManySchema } from "../schemas/findManyPerson.schema";
import { PersonCreateOneSchema } from "../schemas/createOnePerson.schema";
import { PersonCreateManySchema } from "../schemas/createManyPerson.schema";
import { PersonDeleteOneSchema } from "../schemas/deleteOnePerson.schema";
import { PersonUpdateOneSchema } from "../schemas/updateOnePerson.schema";
import { PersonDeleteManySchema } from "../schemas/deleteManyPerson.schema";
import { PersonUpdateManySchema } from "../schemas/updateManyPerson.schema";
import { PersonUpsertSchema } from "../schemas/upsertOnePerson.schema";
import { PersonAggregateSchema } from "../schemas/aggregatePerson.schema";
import { PersonGroupBySchema } from "../schemas/groupByPerson.schema";

export const peopleRouter = createRouter()

  .query("aggregatePerson", {
    input: PersonAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregatePerson = await ctx.prisma.person.aggregate(input);
      return aggregatePerson;
    },
  })

  .mutation("createManyPerson", {
    input: PersonCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyPerson = await ctx.prisma.person.createMany({ data: input.data });
      return createManyPerson;
    },
  })

  .mutation("createOnePerson", {
    input: PersonCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOnePerson = await ctx.prisma.person.create({ data: input.data });
      return createOnePerson;
    },
  })

  .mutation("deleteManyPerson", {
    input: PersonDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyPerson = await ctx.prisma.person.deleteMany(input);
      return deleteManyPerson;
    },
  })

  .mutation("deleteOnePerson", {
    input: PersonDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOnePerson = await ctx.prisma.person.delete({ where: input.where });
      return deleteOnePerson;
    },
  })

  .query("findFirstPerson", {
    input: PersonFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstPerson = await ctx.prisma.person.findFirst(input);
      return findFirstPerson;
    },
  })

  .query("findManyPerson", {
    input: PersonFindManySchema,
    async resolve({ ctx, input }) {
      const findManyPerson = await ctx.prisma.person.findMany(input);
      return findManyPerson;
    },
  })

  .query("findUniquePerson", {
    input: PersonFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniquePerson = await ctx.prisma.person.findUnique({ where: input.where });
      return findUniquePerson;
    },
  })

  .query("groupByPerson", {
    input: PersonGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByPerson = await ctx.prisma.person.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPerson;
    },
  })

  .mutation("updateManyPerson", {
    input: PersonUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyPerson = await ctx.prisma.person.updateMany(input);
      return updateManyPerson;
    },
  })

  .mutation("updateOnePerson", {
    input: PersonUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOnePerson = await ctx.prisma.person.update({ where: input.where, data: input.data });
      return updateOnePerson;
    },
  })

  .mutation("upsertOnePerson", {
    input: PersonUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOnePerson = await ctx.prisma.person.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOnePerson;
    },
  })
