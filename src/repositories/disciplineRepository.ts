import prisma from "../database/database"

export async function createDiscipline(
    name: string
){
    await prisma.disciplines.create({data: {name}})
}

export async function getDisciplines(){
    const disciplinesData = await prisma.disciplines.findMany()

    return disciplinesData
}

export async function searchDisciplineByName(
    name: string
){
    const disciplineData = await prisma.disciplines.findFirst({where: {name}})
    return disciplineData
}

export async function searchDisciplineById(
    id: number
){
    const disciplineData = await prisma.disciplines.findFirst({where: {id}})
    return disciplineData
}