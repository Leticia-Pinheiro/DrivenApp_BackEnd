import { Router } from "express"
import * as authController from "../controllers/authController"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import signUpSchema from "../schemas/signUpSchema"

const authRouter = Router()

authRouter.post(
	"/signUp",	
	ValidateSchema(signUpSchema),
	authController.signUp
)

export default authRouter