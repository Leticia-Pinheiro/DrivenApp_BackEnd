import * as contentsRepository from "../../repositories/contentsRepository"

export async function validateContentsId(
    id: number
){
    const contentsData = await contentsRepository.searchContentsById(id)

    return contentsData
}