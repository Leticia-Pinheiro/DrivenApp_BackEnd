import prisma from "../database/database";
import { TypeProject } from "../utils/interfaces";

export async function createProject(
    projectData: TypeProject
){
    await prisma.projects.create({data: projectData})
}

export async function getProjectsByModuleId(
    moduleId: number      
){
    const projects = await prisma.projects.findMany({where : {moduleId}})
    return projects
}

export async function updateProjectTitle(
    id: number,
    title: string
){
    await prisma.projects.update({
        where: {id},
        data: {title}
    }
    )
} 

export async function updateProjectDescription(
    id: number,
    description: string
){
    await prisma.projects.update({
        where: {id},
        data: {description}
    }
    )
} 

export async function deleteProject(
    projectsId: number
){
    await prisma.projects.delete({where: {id: projectsId}})
}

export async function searchProjectById(
    id: number
){
    const projectsData = await prisma.projects.findUnique({where: {id}})
    return projectsData
}