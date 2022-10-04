import prisma from "../database/database"

export async function createClass(
    name: string
){
    await prisma.classes.create({data: {name}})
}

export async function searchClassByName(
    name: string
){
    const classData = await prisma.classes.findFirst({where: {name}})
    return classData
}