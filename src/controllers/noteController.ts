import { Request, Response } from "express";
import * as noteService from "../services/noteService"

export async function createNote(req: Request, res: Response){
    const noteData = req.body

    await noteService.createNote(noteData)

    res.send("Note created successfully").status(201)
}

export async function getNotesByStudentId(req: Request, res: Response){
    const studentId = Number(req.params.studentId)

    const noteData = await noteService.getNotesByStudentId(studentId)
    res.send(noteData).status(201)
}

export async function getNotesByProjectId(req: Request, res: Response){
    const projectId = Number(req.params.projectId)

    const noteData = await noteService.getNotesByProjectId(projectId)
    res.send(noteData).status(201)
}

export async function updateNote(req: Request, res: Response){
    const { noteId, note } = req.body

    await noteService.updateNote(noteId, note)

    res.send("Note updated successfully").status(201)
}

export async function updateNoteFeedback(req: Request, res: Response){
    const { noteId, feedback } = req.body

    await noteService.updateNoteFeedback(noteId, feedback)

    res.send("Note updated successfully").status(201)
}

export async function deleteNote(req: Request, res: Response){
    const id = Number(req.params.id)

    await noteService.deleteNote(id)

    res.send("Note deleted successfully").status(201)
}