import * as moduleRepository from "../repositories/moduleRepository"
import * as moduleValidation from "./validations/moduleValidation"
import * as disciplineValidation from "./validations/disciplineValidation"
import * as classValidation from "./validations/classValidation"
import { TypeModule } from "../utils/interfaces"

export async function createModule(
    moduleData: TypeModule
){
    await validateToCreateModule(moduleData)
    await moduleRepository.createModule(moduleData)
}

export async function getModulesByDisciplineId(
    disciplineId: number
){
    await validateToGetModulesByDiscipline(disciplineId)
    const modulesData = await moduleRepository.getModulesByDisciplineId(disciplineId)
    return modulesData
}

export async function getModulesByClassId(
    classId: number
){
    await validateToGetModulesByClass(classId)
    const modulesData = await moduleRepository.getModulesByClassId(classId)
    return modulesData
}

export async function updateModuleName(
    moduleId: number,
    name: string
){
    await validateModuleId(moduleId)
    await moduleRepository.updateModuleName(moduleId, name)
}

export async function deleteModule(
    id: number
){
    await validateModuleId(id)
    await moduleRepository.deleteModule(id)
}

export async function validateToCreateModule(
    moduleData: TypeModule
){
    const {
        disciplineId,
        classId
    }= moduleData

    const classData = await classValidation.validateClassId(classId)
    const disciplineData = await disciplineValidation.validateDisciplineId(disciplineId)

    if (!classData || !disciplineData){
        throw { code: "Not Found", message: "Invalid data"}
    }
}

export async function validateToGetModulesByDiscipline(
    disciplineId: number
){
    const disciplineData = await disciplineValidation.validateDisciplineId(disciplineId)
    if (!disciplineData){
        throw { code: "Not Found", message: "Invalid data"}
    }
}

export async function validateToGetModulesByClass(
    classId: number
){
    const classData = await classValidation.validateClassId(classId)
    if (!classData){
        throw { code: "Not Found", message: "Invalid class"}
    }
}

export async function validateModuleId(
    id: number
){
    const moduleData = await moduleValidation.validateModuleId(id)

    if (!moduleData){
        throw { code: "Not Found", message: "Invalid module"}
    }
}
