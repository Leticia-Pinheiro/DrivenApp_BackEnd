import * as tutorRepository from "../repositories/tutorRepository"
import * as classValidation from "./validations/classValidation"
import * as groupValidation from "./validations/groupValidation"
import * as userValidation from "./validations/userValidation"
import * as tutorValidation from "./validations/tutorValidation"
import { TypeTutor } from "../utils/interfaces"

export async function createTutor(
    tutorData: TypeTutor
){
    await validateToCreateTutor(tutorData)
    await tutorRepository.createTutor(tutorData)
}

export async function getAllTutors(){
    const tutorsData = await tutorRepository.getAllTutors()
    return tutorsData
}

export async function getTutorsByClassId(
    classId: number
){
    await validateToGetTutorByClass(classId)
    const tutorsData = await tutorRepository.getTutorsByClassId(classId)
    return tutorsData
}

export async function getTutorsByGroupId(
    groupId: number
){
    await validateToGetTutorByGroup(groupId)
    const tutorsData = await tutorRepository.getTutorByGroupId(groupId)
    return tutorsData
}


export async function updateTutorGroup(
    tutorId: number,
    groupId: number
){
    await validateToUpdateTutorGroup(tutorId, groupId)
    await tutorRepository.updateTutorGroup(tutorId, groupId)
}

export async function deleteTutor(
    id: number
){
    await validateToDeleteTutor(id)
    await tutorRepository.deleteTutor(id)
}

//--------------------------------------------------------------------------------------

export async function validateToCreateTutor(
    tutorData: TypeTutor
){
    const {
        userId,
        groupId
    } = tutorData

    const groupData = await groupValidation.validateGroupId(groupId)    
    const userData = await userValidation.validateUserById(userId)
    const groupTutor = await tutorValidation.validateTutorByGroup(groupId)

    if (!groupData || !userData){
        throw { code: "Not Found", message: "Invalid data"}
    }

    if (userData.type !== "tutor"){
        throw { code: "Unauthorized", message: "The user is not a tutor"}
    }

    if(groupTutor){
        throw { code: "Unauthorized", message: "Group already has a tutor"}
    }

}

export async function validateToGetTutorByClass(
    classId: number
){
    const classData = await classValidation.validateClassId(classId)
    if (!classData){
        throw { code: "Not Found", message: "Invalid class Id"}
    }
}

export async function validateToGetTutorByGroup(
    groupId: number
){
    const groupData = await groupValidation.validateGroupId(groupId)
    if (!groupData){
        throw { code: "Not Found", message: "Invalid group Id"}
    }
}

export async function validateToUpdateTutorGroup(
    tutorId: number,
    groupId: number
){
    const groupData = await groupValidation.validateGroupId(groupId)    
    const tutorData = await tutorValidation.validateTutorById(tutorId)
    const groupTutor = await tutorValidation.validateTutorByGroup(groupId)

    if (!groupData || !tutorData){
        throw { code: "Not Found", message: "Invalid data"}
    }

    if(groupTutor){
        throw { code: "Unauthorized", message: "Group already has a tutor"}
    }
}

export async function validateToDeleteTutor(
    id: number
){
    const tutorData = await tutorValidation.validateTutorById(id)

    if (!tutorData){
        throw { code: "Not Found", message: "Invalid tutor Id"}
    }
}