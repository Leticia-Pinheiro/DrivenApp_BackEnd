import * as userValidation from "./validations/userValidation"
import * as authRepository from "../repositories/authRepository"
import { generateToken } from "../utils/generateToken"
import { EncryptData }  from "../utils/bcrypt"
import { TypeUser, IBodySignUp, IBodySignIn} from "../utils/interfaces"
import bcrypt from "bcrypt"

export async function signUp(
    userData: IBodySignUp){    
    const {
        name, 
        email, 
        password, 
        confirmedPassword, 
        type} = userData

    await validateToSignUp(email, password, confirmedPassword)

    const encryptedPassword : string = EncryptData(password)

    const user : TypeUser = {name, email, password:encryptedPassword, type}
    await authRepository.createUser(user) 
}

export async function signIn(
    userData: IBodySignIn){

    const {id, type} = await validateToSignIn(userData)    
    const token = generateToken(id)    
    return {type, token}
}


export async function validateToSignUp(
    email: string,
    password: string,
    confirmedPassword: string
){

    const user = await userValidation.validateUserByEmail(email)

    if(user){
        throw { code: "Unauthorized", message: "E-mail already registered"}
    }

    if(confirmedPassword !== password){
        throw {code: "Unauthorized", message: "Incompatible passwords"}
    }

}

export async function validateToSignIn(
    userData: IBodySignIn
){

    const {email, password} = userData
    const user = await userValidation.validateUserByEmail(email)       

    if(!user){
        throw { code: "Not Found", message: "Invalid e-mail "}
    }

    if(!bcrypt.compareSync(password, user.password)){
        throw { code: "Not Found", message: "Invalid password"}
    }  

    return user
}