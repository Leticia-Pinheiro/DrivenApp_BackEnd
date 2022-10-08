import { Request, Response } from "express";
import * as moduleService from "../services/moduleService"

export async function createModule(req: Request, res: Response){
    const moduleData = req.body

    await moduleService.createModule(moduleData)

    res.send("Module created successfully").status(201)
}

export async function getModulesByClassId(req: Request, res: Response){
    const classId = Number(req.params.classId)

    const moduleData = await moduleService.getModulesByClassId(classId)
    res.send(moduleData).status(201)
}

export async function getModulesByDisciplineId(req: Request, res: Response){
    const disciplineId = Number(req.params.disciplineId)

    const moduleData = await moduleService.getModulesByDisciplineId(disciplineId)
    res.send(moduleData).status(201)
}

export async function updateModuleName(req: Request, res: Response){
    const { moduleId, name } = req.body

    await moduleService.updateModuleName(moduleId, name)

    res.send("Module updated successfully").status(201)
}

export async function deleteModule(req: Request, res: Response){
    const id = Number(req.params.id)

    await moduleService.deleteModule(id)

    res.send("Module deleted successfully").status(201)
}