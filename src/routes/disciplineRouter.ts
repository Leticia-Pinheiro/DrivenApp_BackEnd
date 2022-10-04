import { Router } from "express"
import * as disciplineController from "../controllers/disciplineController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import nameSchema from "../schemas/nameSchema"

const disciplineRouter = Router()

disciplineRouter.post(
	"/discipline",	
    verifyToken,
	ValidateSchema(nameSchema),
	disciplineController.createDiscipline
)

disciplineRouter.get(
	"/disciplines",	
    verifyToken,	
	disciplineController.getDisciplines
)

export default disciplineRouter