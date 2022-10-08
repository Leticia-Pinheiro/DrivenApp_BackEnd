import * as noteRepository from "../../repositories/noteRepository"

export async function validateNoteId(
    id: number
){
    const noteData = await noteRepository.searchNoteById(id)

    return noteData
}