import prisma from "../database/database"
import { TypeTeacher } from "../utils/interfaces"

export async function createTeacher(
    teacherData: TypeTeacher
){
    await prisma.teachers.create({data: teacherData})
}

export async function getAllTeachers(){
    const allTeachers = await prisma.teachers.findMany()
    return allTeachers
}

export async function getTeachersByClassId(
    classId: number
){
    const teachers = await prisma.teachers.findMany({where: {classId}})
    return teachers
}

export async function getTeachersByDisciplineId(
    disciplineId: number
){
    const teachers = await prisma.teachers.findMany({where: {disciplineId}})
    return teachers
}

export async function updateTeacherClass(
    teacherId: number,
    classId: number
){
    await prisma.teachers.update({
        where: {id: teacherId},
        data: {classId}
    }
    )
}

export async function updateTeacherDiscipline(
    teacherId: number,
    disciplineId: number
){
    await prisma.teachers.update({
        where: {id: teacherId},
        data: {disciplineId}
    }
    )
}

export async function deleteTeacher(
    teacherId: number
){
    await prisma.teachers.delete({where: {id: teacherId}})
}

