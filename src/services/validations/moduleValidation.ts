import * as moduleRepository from "../../repositories/moduleRepository"

export async function validateModuleId(
    id: number
){
    const moduleData = await moduleRepository.searchModuleById(id)

    return moduleData
}