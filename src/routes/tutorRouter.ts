import { Router } from "express"
import * as tutorController from "../controllers/tutorController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import tutorSchema from "../schemas/tutorSchema"
import updateGroupTutorSchema from "../schemas/updateGroupTutorSchema"

const tutorRouter = Router()

tutorRouter.post(
	"/tutor",	
    verifyToken,
	ValidateSchema(tutorSchema),
	tutorController.createTutor
)

tutorRouter.get(
	"/tutors",	
    verifyToken,	
	tutorController.getAllTutors
)

tutorRouter.get(
	"/tutors/class/:classId",	
    verifyToken,	
	tutorController.getTutorsByClassId
)

tutorRouter.get(
	"/tutor/group/:groupId",	
    verifyToken,	
	tutorController.getTutorsByGroupId
)

tutorRouter.put(
    "/tutor/group",
    verifyToken,
    ValidateSchema(updateGroupTutorSchema),
    tutorController.updateTutorGroup
)

tutorRouter.delete(
    "/tutor/:id",
    verifyToken,
    tutorController.deleteTutor
)

export default tutorRouter