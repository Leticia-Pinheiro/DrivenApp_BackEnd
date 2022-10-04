import { Request, Response } from "express"
import * as classService from "../services/classService"

export async function createClass(req: Request, res: Response){
    const { name } = req.body

    await classService.createClass(name)

    res.send("Class created successfully").status(201)
}

export async function getClasses(req: Request, res: Response){
    const classesData = await classService.getClasses()

    res.send(classesData).status(201)
}