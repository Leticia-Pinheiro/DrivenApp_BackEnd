import * as teacherRepository from "../../repositories/teacherRepository"

export async function validateTeacherById(
    id: number
){
    const teacherData = await teacherRepository.searchTeacherById(id)

    return teacherData
}