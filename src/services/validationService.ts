import * as authRepository from "../repositories/authRepository"
import * as classRepository from "../repositories/classRepository"
import { IBodySignIn } from "../utils/interfaces"
import bcrypt from "bcrypt"

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

export async function validateToSignIn(
    userData: IBodySignIn
){

    const {email, password} = userData
    const user = await validateUserByEmail(email)       

    if(!user){
        throw { code: "Not Found", message: "Invalid e-mail "}
    }

    await validatePassword(password, user.password)    
    return user
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

export async function validatePassword(
    password: string,
    encryptedPassword: string){

    if(!bcrypt.compareSync(password, encryptedPassword)){
        throw { code: "Not Found", message: "Invalid password"}
    }
}

export async function validateClassName(
    name: string
){
    const classData = await classRepository.searchClassByName(name)

    if(classData){
        throw { code: "Unauthorized", message: "Class already registered"}
    }
}