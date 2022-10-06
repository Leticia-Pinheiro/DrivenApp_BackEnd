import * as studentRepository from "../repositories/studentRepository"
import * as classValidation from "./validations/classValidation"
import * as groupValidation from "./validations/groupValidation"
import * as userValidation from "./validations/userValidation"
import * as studentValidation from "./validations/studentValidation"
import { TypeStudent } from "../utils/interfaces"

export async function createStudent(
    studentData: TypeStudent
){
    await validateToCreateStudent(studentData)
    await studentRepository.createStudent(studentData)
}

export async function getAllStudents(){
    const studentsData = await studentRepository.getAllStudents()
    return studentsData
}

export async function getStudentsByClassId(
    classId: number
){
    await validateToGetStudentByClass(classId)
    const studentsData = await studentRepository.getStudentsByClassId(classId)
    return studentsData
}

export async function getStudentsByGroupId(
    groupId: number
){
    await validateToGetStudentByGroup(groupId)
    const studentsData = await studentRepository.getStudentByGroupId(groupId)
    return studentsData
}


export async function updateStudentGroup(
    studentId: number,
    groupId: number
){
    await validateToUpdateStudentGroup(studentId, groupId)
    await studentRepository.updateStudentGroup(studentId, groupId)
}

export async function deleteStudent(
    id: number
){
    await validateToDeleteStudent(id)
    await studentRepository.deleteStudent(id)
}

//--------------------------------------------------------------------------------------

export async function validateToCreateStudent(
    studentData: TypeStudent
){
    const {
        userId,
        groupId
    } = studentData

    const groupData = await groupValidation.validateGroupId(groupId)    
    const userData = await userValidation.validateUserById(userId)
    const userStudent = await studentValidation.validateStudentByUser(userId)

    if (!groupData || !userData){
        throw { code: "Not Found", message: "Invalid data"}
    }

    if (userData.type !== "student"){
        throw { code: "Unauthorized", message: "The user is not a student"}
    }

    if(userStudent){
        throw { code: "Unauthorized", message: "Student already registered"}
    }

}

export async function validateToGetStudentByClass(
    classId: number
){
    const classData = await classValidation.validateClassId(classId)
    if (!classData){
        throw { code: "Not Found", message: "Invalid class Id"}
    }
}

export async function validateToGetStudentByGroup(
    groupId: number
){
    const groupData = await groupValidation.validateGroupId(groupId)
    if (!groupData){
        throw { code: "Not Found", message: "Invalid group Id"}
    }
}

export async function validateToUpdateStudentGroup(
    studentId: number,
    groupId: number
){
    const groupData = await groupValidation.validateGroupId(groupId)    
    const studentData = await studentValidation.validateStudentById(studentId)    

    if (!groupData || !studentData){
        throw { code: "Not Found", message: "Invalid data"}
    }
    
}

export async function validateToDeleteStudent(
    id: number
){
    const studentData = await studentValidation.validateStudentById(id)

    if (!studentData){
        throw { code: "Not Found", message: "Invalid student Id"}
    }
}