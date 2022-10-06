import { Router } from "express"
import * as teacherController from "../controllers/teacherController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import teacherSchema from "../schemas/teacherSchema"
import updateClassSchema from "../schemas/updateClassSchema"
import updateDisciplineSchema from "../schemas/updateDisciplineSchema"

const teacherRouter = Router()

teacherRouter.post(
	"/teacher",	
    verifyToken,
	ValidateSchema(teacherSchema),
	teacherController.createTeacher
)

teacherRouter.get(
	"/teachers",	
    verifyToken,	
	teacherController.getAllTeachers
)

teacherRouter.get(
	"/teachers/class/:classId",	
    verifyToken,	
	teacherController.getTeachersByClassId
)

teacherRouter.get(
	"/teachers/discipline/:disciplineId",	
    verifyToken,	
	teacherController.getTeachersByDisciplineId
)

teacherRouter.put(
    "/teacher/class",
    verifyToken,
    ValidateSchema(updateClassSchema),
    teacherController.updateTeacherClass
)

teacherRouter.put(
    "/teacher/discipline",
    verifyToken,
    ValidateSchema(updateDisciplineSchema),
    teacherController.updateTeacherDiscipline
)

teacherRouter.delete(
    "/teacher/:id",
    verifyToken,
    teacherController.deleteTeacher
)

export default teacherRouter