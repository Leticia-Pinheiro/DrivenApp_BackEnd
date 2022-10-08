import prisma from "../database/database";
import { TypeNote } from "../utils/interfaces";
import { notesOptions } from "@prisma/client";

export async function createNote(
    noteData: TypeNote
){
    await prisma.notes.create({data: noteData})
}

export async function getNotesByStudentId(
    studentId: number      
){
    const notes = await prisma.notes.findMany({where : {studentId}})
    return notes
}

export async function getNotesByProjectId(
    projectId: number      
){
    const notes = await prisma.notes.findMany({where : {projectId}})
    return notes
}

export async function updateNote(
    id: number,
    note: notesOptions
){
    await prisma.notes.update({
        where: {id},
        data: {note}
    }
    )
} 

export async function updateNoteFeedback(
    id: number,
    feedback: string
){
    await prisma.notes.update({
        where: {id},
        data: {feedback}
    }
    )
} 

export async function deleteNote(
    noteId: number
){
    await prisma.notes.delete({where: {id: noteId}})
}

export async function searchNoteById(
    id: number
){
    const notesData = await prisma.notes.findUnique({where: {id}})
    return notesData
}