import prisma from "../database/database"
import { TypeGroup } from "../utils/interfaces"


export async function createGroup(
    groupData: TypeGroup
){
    await prisma.groups.create({data: groupData})
}

export async function getGroupsByClassId(
    classId: number
){
    const groupsData = await prisma.groups.findMany({where: {classId}})

    return groupsData
}

export async function searchGroupByName(
    name: string
){
    const groupData = await prisma.groups.findFirst({where: {name}})
    return groupData
}