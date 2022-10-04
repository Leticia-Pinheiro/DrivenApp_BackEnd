import { Request, Response } from "express"
import * as authService from "../services/authService"
import { IBodySignIn, IBodySignUp } from "../utils/interfaces"

export async function signUp(req: Request, res: Response){
        
    const userData: IBodySignUp = req.body 
    await authService.signUp(userData)
    res.send("Registration successfully complete").status(201)    
}

export async function signIn(req: Request, res: Response){

    const userData : IBodySignIn = req.body 
    const {type, token} = await authService.signIn(userData)
    res.send({type, token}).status(200)
}