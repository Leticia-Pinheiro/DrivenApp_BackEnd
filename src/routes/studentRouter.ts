import { Router } from "express"
import * as studentController from "../controllers/studentController"
import HeaderMiddleware from "../middlewares/headerMiddleware"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import modelSchema from "../schemas/modelSchema"

const studentRouter = Router()
const endpoint = "/model"
const header = "header_name"

studentRouter.post(
	"/create",
	HeaderMiddleware(header, endpoint),
	ValidateSchema(modelSchema, `${endpoint}/create`),
	studentController.modelFunction
)

export default studentRouter