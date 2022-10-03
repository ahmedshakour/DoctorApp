
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export interface GenderInput {
    id?: number
    type?: string
}

export const GenderDefs = `
    createGender(gender: String): Gender
    updateGender(gender: GenderInput): Gender
    deleteGender(gender: Int): Gender
    deleteGenders : Int
`

export const GenderQueries = `
     GetGenders: [Gender!]!
`
 
export const GenderType = `
    type Gender{
        id: Int!
        type: String
    }
    input GenderInput {
        id: Int!
        type: String
    }
`
export var GenderResolvers =
{
    GetGenders: (_parent: any, _args: any, db: any) => {
        return prisma.gender.findMany()
    }
}
export var GenderMutations =
{
    createGender: async (
        _parent: any,
        args: { data: string },
        db: any,
    ) => {
        try {
            const data = await prisma.gender.create({
                data: {
                    type: args.data
                }
            });
            return data;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    updateGender: (
        _parent: any,
        args: { data: GenderInput },
        db: any,
    ) => {
        console.log("------------------------------")

        console.log(args.data)
        return prisma.gender.update({
            where: {
                id: args.data.id,
            },
            data: {
                type: args.data.type
            },
        }).then(data => {
            return data
        }).catch(error => {
            console.log(error)
            return null
        })
    },
    deleteGender: (
        _parent: any,
        args: { data: number },
        db: any,
    ) => {
        return db.prisma.gender.delete({
            where: {
                id: args.data,
            }
        }).then((data: any) => {
            return data
        }).catch((error: any) => {
            console.log(error)
            return null
        })
    },
    deleteGenders: (
        _parent: any
    ) => {
        try {
            return prisma.gender.deleteMany().then((data) => {
                let d = data.count
                return d;
            })
        } catch (error) {
            console.log(error)
        }
    },
}