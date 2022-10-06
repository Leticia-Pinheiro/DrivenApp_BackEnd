import * as tutorRepository from "../../repositories/tutorRepository"

export async function validateTutorById(
    id: number
){
    const tutorData = await tutorRepository.searchTutorById(id)

    return tutorData
}

export async function validateTutorByGroup(
    groupId: number
){
    const tutorData = await tutorRepository.searchTutorByGroupId(groupId)

    return tutorData
}