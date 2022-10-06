import * as teacherRepository from "../repositories/teacherRepository"
import * as classValidation from "./validations/classValidation"
import * as disciplineValidation from "./validations/disciplineValidation"
import * as userValidation from "./validations/userValidation"
import * as teacherValidation from "./validations/teacherValidation"
import { TypeTeacher } from "../utils/interfaces"

export async function createTeacher(
    teacherData: TypeTeacher
){
    await validateToCreateTeacher(teacherData)
    await teacherRepository.createTeacher(teacherData)
}

export async function getAllTeachers(){
    const teachersData = await teacherRepository.getAllTeachers()
    return teachersData
}

export async function getTeachersByClassId(
    classId: number
){
    await validateToGetTeacherByClass(classId)
    const teachersData = await teacherRepository.getTeachersByClassId(classId)
    return teachersData
}

export async function getTeachersByDisciplineId(
    disciplineId: number
){
    await validateToGetTeacherByDiscipline(disciplineId)
    const teachersData = await teacherRepository.getTeachersByDisciplineId(disciplineId)
    return teachersData
}

export async function updateTeacherClass(
    teacherId: number,
    classId: number
){
    await validateToUpdateTeacherClass(teacherId, classId)
    await teacherRepository.updateTeacherClass(teacherId, classId)
}

export async function updateTeacherDiscipline(
    teacherId: number,
    disciplineId: number
){
    await validateToUpdateTeacherDiscipline(teacherId, disciplineId)
    await teacherRepository.updateTeacherDiscipline(teacherId, disciplineId)
}

export async function deleteTeacher(
    id: number
){
    await validateToDeleteTeacher(id)
    await teacherRepository.deleteTeacher(id)
}

//--------------------------------------------------------------------------------------

export async function validateToCreateTeacher(
    teacherData: TypeTeacher
){
    const {
        userId,
        classId,
        disciplineId
    } = teacherData

    const classData = await classValidation.validateClassId(classId)
    const disciplineData = await disciplineValidation.validateDisciplineId(disciplineId)
    const userData = await userValidation.validateUserById(userId)

    if (!classData || !disciplineData || !userData){
        throw { code: "Not Found", message: "Invalid data"}
    }

    if (userData.type !== "teacher"){
        throw { code: "Unauthorized", message: "The user is not a teacher"}
    }

}

export async function validateToGetTeacherByClass(
    classId: number
){
    const classData = await classValidation.validateClassId(classId)
    if (!classData){
        throw { code: "Not Found", message: "Invalid class Id"}
    }
}

export async function validateToGetTeacherByDiscipline(
    disciplineId: number
){
    const disciplineData = await disciplineValidation.validateDisciplineId(disciplineId)
    if (!disciplineData){
        throw { code: "Not Found", message: "Invalid discipline Id"}
    }
}

export async function validateToUpdateTeacherClass(
    teacherId: number,
    classId: number
){
    const classData = await classValidation.validateClassId(classId)    
    const teacherData = await teacherValidation.validateTeacherById(teacherId)

    if (!classData || !teacherData){
        throw { code: "Not Found", message: "Invalid data"}
    }
}

export async function validateToUpdateTeacherDiscipline(
    teacherId: number,
    disciplineId: number
){
    const disciplineData = await disciplineValidation.validateDisciplineId(disciplineId)    
    const teacherData = await teacherValidation.validateTeacherById(teacherId)

    if (!disciplineData || !teacherData){
        throw { code: "Not Found", message: "Invalid data"}
    }
}

export async function validateToDeleteTeacher(
    id: number
){
    const teacherData = await teacherValidation.validateTeacherById(id)

    if (!teacherData){
        throw { code: "Not Found", message: "Invalid teacher Id"}
    }
}