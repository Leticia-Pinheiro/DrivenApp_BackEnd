import * as studentRepository from "../../repositories/studentRepository"

export async function validateStudentById(
    id: number
){
    const studentData = await studentRepository.searchStudentById(id)

    return studentData
}

export async function validateStudentByUser(
    userId: number
){
    const studentData = await studentRepository.searchStudentByUserId(userId)

    return studentData
}