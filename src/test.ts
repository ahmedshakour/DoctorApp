import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


console.log("work")


async function main() {

    console.log(`Start seeding ...`)
     
    const allPosts  = await prisma.user.findMany()

    console.log("allPosts, ",allPosts)
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
 