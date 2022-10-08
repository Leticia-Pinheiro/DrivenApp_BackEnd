import { Router } from "express"
import * as moduleController from "../controllers/moduleController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import moduleSchema from "../schemas/moduleSchema"
import updateModuleName from "../schemas/updateModuleName"

const moduleRouter = Router()

moduleRouter.post(
	"/module",	
    verifyToken,
	ValidateSchema(moduleSchema),
	moduleController.createModule
)

moduleRouter.get(
	"/modules/class/:classId",	
    verifyToken,	
	moduleController.getModulesByClassId
)

moduleRouter.get(
	"/modules/discipline/:disciplineId",	
    verifyToken,	
	moduleController.getModulesByDisciplineId
)

moduleRouter.put(
    "/module/name",
    verifyToken,
    ValidateSchema(updateModuleName),
    moduleController.updateModuleName
)

moduleRouter.delete(
    "/module/:id",
    verifyToken,
    moduleController.deleteModule
)

export default moduleRouter