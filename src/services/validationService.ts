import * as authRepository from "../repositories/authRepository"
import * as classRepository from "../repositories/classRepository"
import * as disciplineRepository from "../repositories/disciplineRepository"
import * as groupRepository from "../repositories/groupRepository"
import { IBodySignIn, TypeGroup } from "../utils/interfaces"
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

export async function validateToCreateGroup(
    groupData: TypeGroup
){
    const {
        name,
        classId
    } = groupData

    await validateGroupName(name)
    await validateClassId(classId)
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

export async function validateClassId(
    id: number
){
    const classData = await classRepository.searchClassById(id)

    if (!classData){
        throw { code: "Not Found", message: "Invalid class id"}
    }
}

export async function validateDisciplineName(
    name: string
){
    const disciplineData = await disciplineRepository.searchDisciplineByName(name)

    if(disciplineData){
        throw { code: "Unauthorized", message: "Discipline already registered"}
    }
}

export async function validateGroupName(
    name: string
){
    const groupData = await groupRepository.searchGroupByName(name)

    if(groupData){
        throw { code: "Unauthorized", message: "Group already registered"}
    }
}

