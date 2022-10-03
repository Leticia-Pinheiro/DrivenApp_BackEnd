import { Request, Response } from "express"
import * as authService from "../services/authService"
import { IBodySignUp, TypeUser } from "../utils/interfaces"

export async function signUp(req: Request, res: Response){
        
    const userData: IBodySignUp = req.body 
    await authService.signUp(userData)
    res.send("Registration successfully complete").status(201)    
}