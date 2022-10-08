import { Request, Response } from "express";
import * as contentsService from "../services/contentsService"

export async function createContents(req: Request, res: Response){
    const contentsData = req.body

    await contentsService.createContents(contentsData)

    res.send("Contents created successfully").status(201)
}

export async function getContentsByModuleId(req: Request, res: Response){
    const moduleId = Number(req.params.moduleId)

    const moduleData = await contentsService.getContentsByModuleId(moduleId)
    res.send(moduleData).status(201)
}

export async function updateContentsTitle(req: Request, res: Response){
    const { contentsId, title } = req.body

    await contentsService.updateContentsTitle(contentsId, title)

    res.send("Contents updated successfully").status(201)
}

export async function updateContentsCompiled(req: Request, res: Response){
    const { contentsId, compiled } = req.body

    await contentsService.updateContentsCompiled(contentsId, compiled)

    res.send("Contents updated successfully").status(201)
}

export async function deleteContents(req: Request, res: Response){
    const id = Number(req.params.id)

    await contentsService.deleteContents(id)

    res.send("Contents deleted successfully").status(201)
}