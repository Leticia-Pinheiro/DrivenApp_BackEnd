import * as noteRepository from "../repositories/noteRepository"
import * as studentValidation from "./validations/studentValidation"
import * as projectValidation from "./validations/projectValidation"
import * as noteValidation from "./validations/noteValidation"
import { TypeNote } from "../utils/interfaces"
import { notesOptions } from "@prisma/client"

export async function createNote(
    noteData: TypeNote
){
    const {
        studentId,
        projectId
    }= noteData

    await validateToCreateNote(studentId, projectId)
    await noteRepository.createNote(noteData)
}

export async function getNotesByStudentId(
    studentId: number
){
    await validateStudentId(studentId)
    const noteData = await noteRepository.getNotesByStudentId(studentId)
    return noteData
}

export async function getNotesByProjectId(
    projectId: number
){
    await validateProjectId(projectId)
    const noteData = await noteRepository.getNotesByProjectId(projectId)
    return noteData
}

export async function updateNote(
    noteId: number,
    note: notesOptions
){
    await validateNoteId(noteId)
    await noteRepository.updateNote(noteId, note)
}

export async function updateNoteFeedback(
    noteId: number,
    feedback: string
){
    await validateNoteId(noteId)
    await noteRepository.updateNoteFeedback(noteId, feedback)
}

export async function deleteNote(
    id: number
){
    await validateNoteId(id)
    await noteRepository.deleteNote(id)
}

export async function validateToCreateNote(
    studentId: number,
    projectId: number
){
    const studentData = await studentValidation.validateStudentById(studentId)    
    const projectData = await projectValidation.validateProjectId(projectId)  

    if (!studentData || !projectData){
        throw { code: "Not Found", message: "Invalid data"}
    }
}

export async function validateNoteId(
    noteId: number
){
    const noteData = await noteValidation.validateNoteId(noteId)    

    if (!noteData){
        throw { code: "Not Found", message: "Invalid note Id"}
    }
}

export async function validateStudentId(
    studentId: number
){
    const studentData = await studentValidation.validateStudentById(studentId)    

    if (!studentData){
        throw { code: "Not Found", message: "Invalid student Id"}
    }
}

export async function validateProjectId(
    projectId: number
){
    const projectData = await projectValidation.validateProjectId(projectId)    

    if (!projectData){
        throw { code: "Not Found", message: "Invalid project Id"}
    }
}