import { Request, Response } from "express"
import * as disciplineService from "../services/disciplineService"

export async function createDiscipline(req: Request, res: Response){
    const { name } = req.body

    await disciplineService.createDiscipline(name)

    res.send("Discipline created successfully").status(201)
}

export async function getDisciplines(req: Request, res: Response){
    const disciplinesData = await disciplineService.getDisciplines()

    res.send(disciplinesData).status(201)
}