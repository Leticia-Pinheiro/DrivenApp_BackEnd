import * as classRepository from "../../repositories/classRepository"

export async function validateClassName(
    name: string
){
    const classData = await classRepository.searchClassByName(name)

    return classData    
}

export async function validateClassId(
    id: number
){
    const classData = await classRepository.searchClassById(id)

    return classData
}