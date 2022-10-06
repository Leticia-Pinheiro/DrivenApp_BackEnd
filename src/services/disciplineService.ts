import * as disciplineValidation from "./validations/disciplineValidation"
import * as disciplineRepository from "../repositories/disciplineRepository"


export async function createDiscipline(
    name: string
){
    
    await validateToCreateDiscipline(name)
    await disciplineRepository.createDiscipline(name)
}

export async function getDisciplines(){
    const disciplinesData = await disciplineRepository.getDisciplines()
    return disciplinesData
}

export async function validateToCreateDiscipline(
    name: string
){
    const disciplineData = await disciplineValidation.validateDisciplineName(name)

    if(disciplineData){
        throw { code: "Unauthorized", message: "Discipline already registered"}
    }
}