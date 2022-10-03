import { DB } from '../context'
import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken' 

const prisma = new PrismaClient() 

export interface UserInput {
    id?: number
    email?: string    
    password?: string
    displayname: string
    provider: string 
    Gender:number
}
export interface SignIn { 
    email?: string    
    password?: string 
}
   
export const UserDefs = `
    createUser(user: UserInput): User
    updateUser(user: UserInput): User
    deleteUser(user: Int): User
    deleteUsers : Int
    
`

export const UserQueries = `
     GetUsers: [User!]!
     UserSignIn(user: SignIn):  User!
    
`
  
 
export const UserType = `

 type Role{
        id: Int!
        name: String   
    }


    type RoleForUser{
        id: Int!  
        User : User
        role : Role
    }

    type User{
        id: Int!
        email: String!
        password: String!
        displayname: String
        roleForUser: [RoleForUser]
    }
    input UserInput {
        id: Int!
        email: String!
        password: String!
        displayname: String
    }
    input SignIn { 
        email: String!
        password: String! 
    }
`
export var UserResolvers =
{
    GetUsers: (_parent: any, _args: any, db: DB) => {
        console.log(_args) 
         return  prisma.user.findMany({}).then(response=>{
            console.log(response)
            return response
        }) 
    },
    UserSignIn: (_parent: any, args: { user: SignIn }, db: DB) => {
        console.log(args) 
        console.log(args.user.email)
        console.log(args.user.password)
 
        return prisma.user.findFirst({
            where: {
                email: args.user.email,
                password: args.user.password
            },
            include:{
                roleForUser: {
                    include:{
                        role:true 
                    }
                }
            }
        }).then(data => {
            console.log(data)
            if (data){

                var token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60),
                    data: `${data.email}${data.password}` 
                }, 'AhmedAbdulshakour');
                data.password = token

                //var decoded = jwt.verify(token, 'AhmedAbdulshakour');
                //console.log(decoded) // bar
            }

            console.log("data*********************************************************")
            console.log(data )
            return data
        }).catch(error => {
            console.log(error)
            return null
        })



       //return db.prisma.User.findMany()
    }
}
export var UserMutations =
{
    createUser: async (
        _parent: any,
        args: { data: string },
        db: DB,
    ) => {
        try {
            const data = await db.prisma.user.create({
                data: {
                    email: args.data,
                    password: args.data,
                    genderId:1
                }
            });
            return data;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    updateUser: (
        _parent: any,
        args: { data: UserInput },
        db: DB,
    ) => {
        console.log("------------------------------")

        console.log(args.data)
        return prisma.user.update({
            where: {
                id: args.data.id,
            },
            data: {
                email: args.data.email,
                password: args.data.password
            },
        }).then(data => {
            return data
        }).catch(error => {
            console.log(error)
            return null
        })
    },
    deleteUser: (
        _parent: any,
        args: { data: number },
        db: DB,
    ) => {
        return db.prisma.user.delete({
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
    deleteUsers: (
        _parent: any
    ) => {
        try {
            return prisma.user.deleteMany().then((data) => {
                let d = data.count
                return d;
            })
        } catch (error) {
            console.log(error)
        }
    },
}