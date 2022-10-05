import { Request, Response } from "express"
import * as groupService from "../services/groupService"

export async function createGroup(req: Request, res: Response){
    const groupData = req.body

    await groupService.createGroup(groupData)

    res.send("Group created successfully").status(201)
}

export async function getGroupsByClassId(req: Request, res: Response){
    const classId = Number(req.params.classId)

    const groupsData = await groupService.getGroupByClassId(classId)

    res.send(groupsData).status(201)
}