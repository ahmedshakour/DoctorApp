import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const RoleData = ['Administrator', 'Doctor', 'Secretary']
const GenderData = ['ذكر', 'أنثى']


const usersData = [
    { email: 'ahmed.Shakour@gmail.com', password: '123456' , display : 'احمد عبد الشكور', provider:'gmail', gender : 1},
]

const RoleForUser   = [
    { user:1, role : 1},
]


async function main() {

    console.log(`Start seeding ...`)
    for (const o of GenderData) {
        const Gender = await prisma.gender.create({
            data: {
                type: o
            },
        })
        console.log(`Created Gender with id: ${Gender.id}`)
    }
    for (const o of usersData) {
        const user = await prisma.user.create({
            data: {
                email: o.email,
                password: o.password,
                displayname:o.display,
                provider:o.provider ,
                gender:{
                    connect:{
                        id:1
                    }
                }
            },
        })
        console.log(`Created user with id: ${user.id}`)
    }
    for (const o of RoleData) {
        const role = await prisma.role.create({
            data: {
                name: o
            },
        })
        console.log(`Created role with id: ${role.id}`)
    }
    for (const o of RoleForUser) {
        const roleForPerson = await prisma.roleForUser.create({
            data: {
                user:{
                    connect:{
                        id:1
                    }
                },
                role:{
                    connect:{
                        id:1
                    }
                }
            },
        })
        console.log(`Created roleForPerson with id: ${roleForPerson.id}`)
    }

    console.log(`Seeding finished.`)
}

main()
    .catch((e) => {
        console.error(e)
        //process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
 