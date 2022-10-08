import prisma from "../database/database"
import { TypeContents } from "../utils/interfaces"

export async function createContents(
    contentsData: TypeContents
){
    await prisma.contents.create({data: contentsData})
}

export async function getContentsByModuleId(
    moduleId: number      
){
    const contents = await prisma.contents.findMany({where : {moduleId}})
    return contents
}

export async function updateContentsTitle(
    id: number,
    title: string
){
    await prisma.contents.update({
        where: {id},
        data: {title}
    }
    )
} 

export async function updateContentsCompiled(
    id: number,
    compiled: string
){
    await prisma.contents.update({
        where: {id},
        data: {compiled}
    }
    )
} 

export async function deleteContents(
    contentsId: number
){
    await prisma.contents.delete({where: {id: contentsId}})
}

export async function searchContentsById(
    id: number
){
    const contentsData = await prisma.contents.findUnique({where: {id}})
    return contentsData
}