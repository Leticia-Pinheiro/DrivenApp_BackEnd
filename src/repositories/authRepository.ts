import prisma from "../database/database"
import { users } from "@prisma/client"
import { TypeUser } from "../utils/interfaces"


export async function createUser(
    userData: TypeUser){  
          
    await prisma.users.create({data: userData})       
}

export async function searchUserByEmail(
    email: string){
    
    const userData = await prisma.users.findUnique({where: {email}})
    return userData
}

export async function searchUserById(
    id: number){       
        
    const userData = await prisma.users.findUnique({where: {id}})
    return userData
}