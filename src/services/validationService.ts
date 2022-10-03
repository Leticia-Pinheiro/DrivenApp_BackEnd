import * as authRepository from "../repositories/authRepository"

export async function validateToSignUp(
    email: string,
    password: string,
    confirmedPassword: string
){

    const user = await validateUserByEmail(email)

    if(user){
        throw { code: "Unauthorized", message: "E-mail already registered"}
    }

    await validatePasswordAndConfirmedPassword(password, confirmedPassword)

}


//------------------------------------------------------------------------------------------


export async function validateUserByEmail(
    email: string){

    const userData = await authRepository.searchUserByEmail(email)   
    
    return userData    
}

export async function validatePasswordAndConfirmedPassword(
    password: string,
    confirmedPassword: string){

    if(confirmedPassword !== password){
        throw {code: "Unauthorized", message: "Incompatible passwords"}
    }
}