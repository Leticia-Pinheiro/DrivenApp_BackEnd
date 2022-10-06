import * as authRepository from "../../repositories/authRepository"

export async function validateUserByEmail(
    email: string){

    const userData = await authRepository.searchUserByEmail(email)   
    
    return userData    
}

export async function validateUserById(
    id: number){

    const userData = await authRepository.searchUserById(id)   
    
    return userData    
}