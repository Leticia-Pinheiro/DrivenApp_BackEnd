import { Router } from "express"
import * as noteController from "../controllers/noteController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import noteSchema from "../schemas/noteSchema"
import updateNoteSchema from "../schemas/updateNote"
import updateNoteFeedbackSchema from "../schemas/updateNoteFeedback"

const noteRouter = Router()

noteRouter.post(
	"/note",	
    verifyToken,
	ValidateSchema(noteSchema),
	noteController.createNote
)

noteRouter.get(
	"/notes/student/:studentId",	
    verifyToken,	
	noteController.getNotesByStudentId
)

noteRouter.get(
	"/notes/project/:projectId",	
    verifyToken,	
	noteController.getNotesByProjectId
)

noteRouter.put(
    "/note/note",
    verifyToken,
    ValidateSchema(updateNoteSchema),
    noteController.updateNote
)

noteRouter.put(
    "/note/feedback",
    verifyToken,
    ValidateSchema(updateNoteFeedbackSchema),
    noteController.updateNoteFeedback
)

noteRouter.delete(
    "/note/:id",
    verifyToken,
    noteController.deleteNote
)

export default noteRouter