import { Router } from "express"
import * as projectController from "../controllers/projectController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import projectSchema from "../schemas/projectSchema"
import updateProjectDescriptionSchema from "../schemas/updateProjectDescription"
import updateProjectTitleSchema from "../schemas/updateProjectTitle"

const projectRouter = Router()

projectRouter.post(
	"/project",	
    verifyToken,
	ValidateSchema(projectSchema),
	projectController.createProject
)

projectRouter.get(
	"/projects/module/:moduleId",	
    verifyToken,	
	projectController.getProjectsByModuleId
)

projectRouter.put(
    "/project/title",
    verifyToken,
    ValidateSchema(updateProjectTitleSchema),
    projectController.updateProjectTitle
)

projectRouter.put(
    "/project/description",
    verifyToken,
    ValidateSchema(updateProjectDescriptionSchema),
    projectController.updateProjectDescription
)

projectRouter.delete(
    "/project/:id",
    verifyToken,
    projectController.deleteProject
)

export default projectRouter