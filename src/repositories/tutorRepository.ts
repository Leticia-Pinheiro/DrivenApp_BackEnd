import prisma from "../database/database"
import { TypeTutor } from "../utils/interfaces"

export async function createTutor(
    tutorData: TypeTutor
){
    await prisma.tutors.create({data: tutorData})
}

export async function getAllTutors(){
    const allTutors = await prisma.tutors.findMany()
    return allTutors
}

export async function getTutorByGroupId(
    groupId: number
){
    const tutor = await prisma.tutors.findMany({where: {groupId}})
    return tutor
}

export async function getTutorsByClassId(
    classId: number      
){
    const tutors = await prisma.classes.findMany({
        select:{
            groups: {                
                select:{
                    id: true,
                    tutors: {
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

    return tutors
}



export async function updateTutorGroup(
    tutorId: number,
    groupId: number
){
    await prisma.tutors.update({
        where: {id: tutorId},
        data: {groupId}
    }
    )
}
 

export async function deleteTutor(
    tutorId: number
){
    await prisma.tutors.delete({where: {id: tutorId}})
}

export async function searchTutorById(
    id: number
){
    const tutorData = await prisma.tutors.findUnique({where: {id}})
    return tutorData
}

export async function searchTutorByGroupId(
    groupId: number
){
    const tutorData = await prisma.tutors.findFirst({where: {groupId}})
    return tutorData
}