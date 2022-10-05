import { Router } from "express"
import * as groupController from "../controllers/groupController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import groupSchema from "../schemas/groupSchema"

const groupRouter = Router()

groupRouter.post(
	"/group",	
    verifyToken,
	ValidateSchema(groupSchema),
	groupController.createGroup
)

groupRouter.get(
	"/groups/:classId",	
    verifyToken,	
	groupController.getGroupsByClassId
)

export default groupRouter