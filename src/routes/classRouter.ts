import { Router } from "express"
import * as classController from "../controllers/classController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import classSchema from "../schemas/classSchema"

const classRouter = Router()

classRouter.post(
	"/class",	
    verifyToken,
	ValidateSchema(classSchema),
	classController.createClass
)

export default classRouter