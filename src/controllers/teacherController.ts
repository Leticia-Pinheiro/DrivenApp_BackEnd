import { Request, Response } from "express"
import * as teacherService from "../services/teacherService"

export async function createTeacher(req: Request, res: Response){
    const teacherData = req.body

    await teacherService.createTeacher(teacherData)

    res.send("Teacher created successfully").status(201)
}

export async function getAllTeachers(req: Request, res: Response){
    const teacherData = await teacherService.getAllTeachers()

    res.send(teacherData).status(201)
}

export async function getTeachersByClassId(req: Request, res: Response){
    const classId = Number(req.params.classId)

    const teacherData = await teacherService.getTeachersByClassId(classId)
    res.send(teacherData).status(201)
}

export async function getTeachersByDisciplineId(req: Request, res: Response){
    const disciplineId = Number(req.params.disciplineId)

    const teacherData = await teacherService.getTeachersByDisciplineId(disciplineId)
    res.send(teacherData).status(201)
}

export async function updateTeacherClass(req: Request, res: Response){
    const { teacherId, classId } = req.body

    await teacherService.updateTeacherClass(teacherId, classId)

    res.send("Teacher updated successfully").status(201)
}

export async function updateTeacherDiscipline(req: Request, res: Response){
    const { teacherId, disciplineId } = req.body

    await teacherService.updateTeacherDiscipline(teacherId, disciplineId)

    res.send("Teacher updated successfully").status(201)
}

export async function deleteTeacher(req: Request, res: Response){
    const id = Number(req.params.id)

    await teacherService.deleteTeacher(id)

    res.send("Teacher deleted successfully").status(201)
}