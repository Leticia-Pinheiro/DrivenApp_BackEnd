import * as classValidation from "./validations/classValidation"
import * as classRepository from "../repositories/classRepository"

export async function createClass(
    name: string
){
    await validateToCreateClass(name)
    await classRepository.createClass(name)
}

export async function getClasses(){
    const classesData = await classRepository.getClasses()
    return classesData
}

export async function validateToCreateClass(
    name: string
){
    const classData = await classValidation.validateClassName(name)

    if(classData){
        throw { code: "Unauthorized", message: "Class already registered"}
    }
}