import { Router } from "express"
import * as studentController from "../controllers/studentController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import studentSchema from "../schemas/studentSchema"
import updateGroupStudentSchema from "../schemas/updateGroupStudentSchema"

const studentRouter = Router()

studentRouter.post(
	"/student",	
    verifyToken,
	ValidateSchema(studentSchema),
	studentController.createStudent
)

studentRouter.get(
	"/students",	
    verifyToken,	
	studentController.getAllStudents
)

studentRouter.get(
	"/students/class/:classId",	
    verifyToken,	
	studentController.getStudentsByClassId
)

studentRouter.get(
	"/students/group/:groupId",	
    verifyToken,	
	studentController.getStudentsByGroupId
)

studentRouter.put(
    "/student/group",
    verifyToken,
    ValidateSchema(updateGroupStudentSchema),
    studentController.updateStudentGroup
)

studentRouter.delete(
    "/student/:id",
    verifyToken,
    studentController.deleteStudent
)

export default studentRouter