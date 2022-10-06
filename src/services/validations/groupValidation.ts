import * as groupRepository from "../../repositories/groupRepository"

export async function validateGroupName(
    name: string
){
    const groupData = await groupRepository.searchGroupByName(name)

    return groupData    
}