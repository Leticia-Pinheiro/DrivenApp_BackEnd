import { Request, Response } from "express"
import * as tutorService from "../services/tutorService"

export async function createTutor(req: Request, res: Response){
    const tutorData = req.body

    await tutorService.createTutor(tutorData)

    res.send("Tutor created successfully").status(201)
}

export async function getAllTutors(req: Request, res: Response){
    const tutorData = await tutorService.getAllTutors()

    res.send(tutorData).status(201)
}

export async function getTutorsByClassId(req: Request, res: Response){
    const classId = Number(req.params.classId)

    const tutorData = await tutorService.getTutorsByClassId(classId)
    res.send(tutorData).status(201)
}

export async function getTutorsByGroupId(req: Request, res: Response){
    const groupId = Number(req.params.groupId)

    const tutorData = await tutorService.getTutorsByGroupId(groupId)
    res.send(tutorData).status(201)
}

export async function updateTutorGroup(req: Request, res: Response){
    const { tutorId, groupId } = req.body

    await tutorService.updateTutorGroup(tutorId, groupId)

    res.send("Tutor updated successfully").status(201)
}

export async function deleteTutor(req: Request, res: Response){
    const id = Number(req.params.id)

    await tutorService.deleteTutor(id)

    res.send("Tutor deleted successfully").status(201)
}