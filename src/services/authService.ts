import * as validationService from "./validationService"
import * as authRepository from "../repositories/authRepository"
import { generateToken } from "../utils/generateToken"
import { EncryptData }  from "../utils/bcrypt"
import { TypeUser, IBodySignUp, IBodySignIn} from "../utils/interfaces"

export async function signUp(
    userData: IBodySignUp){    
    const {
        name, 
        email, 
        password, 
        confirmedPassword, 
        type} = userData

    await validationService.validateToSignUp(email, password, confirmedPassword)

    const encryptedPassword : string = EncryptData(password)

    const user : TypeUser = {name, email, password:encryptedPassword, type}
    await authRepository.createUser(user) 
}

export async function signIn(
    userData: IBodySignIn){

    const {id, type} = await validationService.validateToSignIn(userData)    
    const token = generateToken(id)    
    return {type, token}
}