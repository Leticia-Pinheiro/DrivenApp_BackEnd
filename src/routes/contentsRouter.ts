import { Router } from "express"
import * as contentsController from "../controllers/contentsController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import contentsSchema from "../schemas/contentsSchema"
import updateCompiledSchema from "../schemas/updateContentsCompiled"
import updateTitleSchema from "../schemas/updateContentsTitle"

const contentsRouter = Router()

contentsRouter.post(
	"/contents",	
    verifyToken,
	ValidateSchema(contentsSchema),
	contentsController.createContents
)

contentsRouter.get(
	"/contents/module/:moduleId",	
    verifyToken,	
	contentsController.getContentsByModuleId
)

contentsRouter.put(
    "/contents/title",
    verifyToken,
    ValidateSchema(updateTitleSchema),
    contentsController.updateContentsTitle
)

contentsRouter.put(
    "/contents/compiled",
    verifyToken,
    ValidateSchema(updateCompiledSchema),
    contentsController.updateContentsCompiled
)

contentsRouter.delete(
    "/contents/:id",
    verifyToken,
    contentsController.deleteContents
)

export default contentsRouter