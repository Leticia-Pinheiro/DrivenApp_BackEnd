import * as contentsRepository from "../repositories/contentsRepository"
import * as moduleValidation from "./validations/moduleValidation"
import * as contentsValidation from "./validations/contentsValidation"
import { TypeContents } from "../utils/interfaces"

export async function createContents(
    contentsData: TypeContents
){
    const {
        moduleId
    }= contentsData

    await validateModuleId(moduleId)
    await contentsRepository.createContents(contentsData)
}

export async function getContentsByModuleId(
    moduleId: number
){
    await validateModuleId(moduleId)
    const contentsData = await contentsRepository.getContentsByModuleId(moduleId)
    return contentsData
}

export async function updateContentsTitle(
    contentsId: number,
    title: string
){
    await validateContentsId(contentsId)
    await contentsRepository.updateContentsTitle(contentsId, title)
}

export async function updateContentsCompiled(
    contentsId: number,
    compiled: string
){
    await validateContentsId(contentsId)
    await contentsRepository.updateContentsCompiled(contentsId, compiled)
}

export async function deleteContents(
    id: number
){
    await validateContentsId(id)
    await contentsRepository.deleteContents(id)
}

export async function validateModuleId(
    moduleId: number
){
    const moduleData = await moduleValidation.validateModuleId(moduleId)    

    if (!moduleData){
        throw { code: "Not Found", message: "Invalid module Id"}
    }
}

export async function validateContentsId(
    contentsId: number
){
    const contentsData = await contentsValidation.validateContentsId(contentsId)    

    if (!contentsData){
        throw { code: "Not Found", message: "Invalid contents Id"}
    }
}