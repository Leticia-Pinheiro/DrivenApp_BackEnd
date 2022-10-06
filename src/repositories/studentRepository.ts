import prisma from "../database/database"
import { TypeStudent } from "../utils/interfaces"

export async function createStudent(
    studentData: TypeStudent
){
    await prisma.students.create({data: studentData})
}

export async function getAllStudents(){
    const allStudents = await prisma.students.findMany()
    return allStudents
}

export async function getStudentByGroupId(
    groupId: number
){
    const students = await prisma.students.findMany({where: {groupId}})
    return students
}

export async function getStudentsByClassId(
    classId: number      
){
    const students = await prisma.classes.findMany({
        select:{
            groups: {                
                select:{
                    id: true,
                    students: {
                        select: {
                            id: true,
                            userId: true,
                            groupId: true
                        }
                    }
                }
            }                      
        },
        where: {id: classId} 
    })

    return students
}

export async function updateStudentGroup(
    studentId: number,
    groupId: number
){
    await prisma.students.update({
        where: {id: studentId},
        data: {groupId}
    }
    )
} 

export async function deleteStudent(
    StudentId: number
){
    await prisma.students.delete({where: {id: StudentId}})
}

export async function searchStudentById(
    id: number
){
    const StudentData = await prisma.students.findUnique({where: {id}})
    return StudentData
}

export async function searchStudentByUserId(
    userId: number
){
    const student = await prisma.students.findFirst({where: {userId}})

    return student
}