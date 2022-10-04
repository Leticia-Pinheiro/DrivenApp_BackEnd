import { Request, Response } from "express"
import * as classService from "../services/classService"

export async function createClass(req: Request, res: Response){
    const { name } = req.body

    await classService.createClass(name)

    res.send("Class created successfully").status(201)
}