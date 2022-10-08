import * as projectRepository from "../../repositories/projectRepository"

export async function validateProjectId(
    id: number
){
    const projectData = await projectRepository.searchProjectById(id)

    return projectData
}