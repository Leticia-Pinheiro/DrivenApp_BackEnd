import * as projectRepository from "../repositories/projectRepository"
import * as moduleValidation from "./validations/moduleValidation"
import * as projectValidation from "./validations/projectValidation"
import { TypeProject } from "../utils/interfaces"

export async function createProject(
    projectData: TypeProject
){
    const {
        moduleId
    }= projectData

    await validateModuleId(moduleId)
    await projectRepository.createProject(projectData)
}

export async function getProjectByModuleId(
    moduleId: number
){
    await validateModuleId(moduleId)
    const projectData = await projectRepository.getProjectsByModuleId(moduleId)
    return projectData
}

export async function updateProjectTitle(
    projectId: number,
    title: string
){
    await validateProjectId(projectId)
    await projectRepository.updateProjectTitle(projectId, title)
}

export async function updateProjectDescription(
    projectId: number,
    description: string
){
    await validateProjectId(projectId)
    await projectRepository.updateProjectDescription(projectId, description)
}

export async function deleteProject(
    id: number
){
    await validateProjectId(id)
    await projectRepository.deleteProject(id)
}

export async function validateModuleId(
    moduleId: number
){
    const moduleData = await moduleValidation.validateModuleId(moduleId)    

    if (!moduleData){
        throw { code: "Not Found", message: "Invalid module Id"}
    }
}

export async function validateProjectId(
    projectId: number
){
    const projectData = await projectValidation.validateProjectId(projectId)    

    if (!projectData){
        throw { code: "Not Found", message: "Invalid project Id"}
    }
}