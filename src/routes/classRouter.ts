import { Router } from "express"
import * as classController from "../controllers/classController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import nameSchema from "../schemas/nameSchema"

const classRouter = Router()

classRouter.post(
	"/class",	
    verifyToken,
	ValidateSchema(nameSchema),
	classController.createClass
)

classRouter.get(
	"/classes",	
    verifyToken,	
	classController.getClasses
)

export default classRouter