import * as groupValidation from "./validations/groupValidation"
import * as classValidation from "./validations/classValidation"
import * as groupRepository from "../repositories/groupRepository"
import { TypeGroup } from "../utils/interfaces"

export async function createGroup(
    groupData: TypeGroup
){
    await validateToCreateGroup(groupData)
    await groupRepository.createGroup(groupData)
}

export async function getGroupByClassId(
    classId: number
){
    await validateToGetGroups(classId)
    

    const groupData = await groupRepository.getGroupsByClassId(classId)
    return groupData
}

export async function validateToCreateGroup(
    groupData: TypeGroup
){
    const {
        name,
        classId
    } = groupData

    const group = await groupValidation.validateGroupName(name)
    const classData = await classValidation.validateClassId(classId)

    if(group){
        throw { code: "Unauthorized", message: "Group already registered"}
    }

    if (!classData){
        throw { code: "Not Found", message: "Invalid class id"}
    }

}

export async function validateToGetGroups(
    classId: number
){
    const classData = await classValidation.validateClassId(classId)

    if(!classData){
        throw { code: "Not Found", message: "Invalid class id"}
    }
}