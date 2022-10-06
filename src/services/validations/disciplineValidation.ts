import * as disciplineRepository from "../../repositories/disciplineRepository"

export async function validateDisciplineName(
    name: string
){
    const disciplineData = await disciplineRepository.searchDisciplineByName(name)

    return disciplineData
    
}

export async function validateDisciplineId(
    id: number
){
    const disciplineData = await disciplineRepository.searchDisciplineById(id)

    return disciplineData    
}

