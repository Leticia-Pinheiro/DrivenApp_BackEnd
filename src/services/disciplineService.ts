import * as validationService from "./validationService"
import * as disciplineRepository from "../repositories/disciplineRepository"

export async function createDiscipline(
    name: string
){
    await validationService.validateDisciplineName(name)
    await disciplineRepository.createDiscipline(name)
}

export async function getDisciplines(){
    const disciplinesData = await disciplineRepository.getDisciplines()
    return disciplinesData
}