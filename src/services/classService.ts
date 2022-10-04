import * as validationService from "./validationService"
import * as classRepository from "../repositories/classRepository"

export async function createClass(
    name: string
){
    await validationService.validateClassName(name)
    await classRepository.createClass(name)
}

export async function getClasses(){
    const classesData = await classRepository.getClasses()
    return classesData
}