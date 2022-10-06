import * as groupRepository from "../../repositories/groupRepository"

export async function validateGroupName(
    name: string
){
    const groupData = await groupRepository.searchGroupByName(name)

    return groupData    
}

export async function validateGroupId(
    id: number
){
    const groupData = await groupRepository.searchGroupById(id)

    return groupData    
}