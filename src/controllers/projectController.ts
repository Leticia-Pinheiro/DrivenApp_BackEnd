import { Request, Response } from "express"
import * as projectService from "../services/projectService"

export async function createProject(req: Request, res: Response){
    const projectData = req.body

    await projectService.createProject(projectData)

    res.send("Project created successfully").status(201)
}

export async function getProjectsByModuleId(req: Request, res: Response){
    const moduleId = Number(req.params.moduleId)

    const moduleData = await projectService.getProjectByModuleId(moduleId)
    res.send(moduleData).status(201)
}

export async function updateProjectTitle(req: Request, res: Response){
    const { projectId, title } = req.body

    await projectService.updateProjectTitle(projectId, title)

    res.send("Project updated successfully").status(201)
}

export async function updateProjectDescription(req: Request, res: Response){
    const { projectId, description } = req.body

    await projectService.updateProjectDescription(projectId, description)

    res.send("project updated successfully").status(201)
}

export async function deleteProject(req: Request, res: Response){
    const id = Number(req.params.id)

    await projectService.deleteProject(id)

    res.send("project deleted successfully").status(201)
}