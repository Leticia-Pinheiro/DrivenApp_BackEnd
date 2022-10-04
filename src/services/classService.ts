import * as validationService from "./validationService"
import * as classRepository from "../repositories/classRepository"

export async function createClass(
    name: string
){
    await validationService.validateClassName(name)
    await classRepository.createClass(name)
}