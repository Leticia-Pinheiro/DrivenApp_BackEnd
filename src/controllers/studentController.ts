import { Request, Response } from "express"
import * as studentService from "../services/studentService"

export async function createStudent(req: Request, res: Response){
    const studentData = req.body

    await studentService.createStudent(studentData)

    res.send("Student created successfully").status(201)
}

export async function getAllStudents(req: Request, res: Response){
    const studentData = await studentService.getAllStudents()

    res.send(studentData).status(201)
}

export async function getStudentsByClassId(req: Request, res: Response){
    const classId = Number(req.params.classId)

    const studentData = await studentService.getStudentsByClassId(classId)
    res.send(studentData).status(201)
}

export async function getStudentsByGroupId(req: Request, res: Response){
    const groupId = Number(req.params.groupId)

    const studentData = await studentService.getStudentsByGroupId(groupId)
    res.send(studentData).status(201)
}

export async function updateStudentGroup(req: Request, res: Response){
    const { studentId, groupId } = req.body

    await studentService.updateStudentGroup(studentId, groupId)

    res.send("Student updated successfully").status(201)
}

export async function deleteStudent(req: Request, res: Response){
    const id = Number(req.params.id)

    await studentService.deleteStudent(id)

    res.send("Student deleted successfully").status(201)
}