import * as validationService from "./validationService"
import * as groupRepository from "../repositories/groupRepository"
import { TypeGroup } from "../utils/interfaces"

export async function createGroup(
    groupData: TypeGroup
){
    await validationService.validateToCreateGroup(groupData)
    await groupRepository.createGroup(groupData)
}

export async function getGroupByClassId(
    classId: number
){
    await validationService.validateClassId(classId)
    const groupData = await groupRepository.getGroupsByClassId(classId)
    return groupData
}