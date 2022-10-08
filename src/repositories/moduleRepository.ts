import prisma from "../database/database";
import { TypeModule } from "../utils/interfaces";

export async function createModule(
    moduleData: TypeModule
){
    await prisma.modules.create({data: moduleData})
}

export async function getModulesByClassId(
    classId: number      
){
    const modules = await prisma.modules.findMany({where : {classId}})
    return modules
}

export async function getModulesByDisciplineId(
    disciplineId: number      
){
    const modules = await prisma.modules.findMany({where : {disciplineId}})
    return modules
}

export async function updateModuleName(
    id: number,
    name: string
){
    await prisma.modules.update({
        where: {id},
        data: {name}
    }
    )
} 

export async function deleteModule(
    moduleId: number
){
    await prisma.modules.delete({where: {id: moduleId}})
}

export async function searchModuleById(
    id: number
){
    const moduleData = await prisma.modules.findUnique({where: {id}})
    return moduleData
}

