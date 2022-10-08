import { Router } from "express"
import authRouter from "./authRouter"
import classRouter from "./classRouter"
import disciplineRouter from "./disciplineRouter"
import groupRouter from "./groupRouter"
import teacherRouter from "./teacherRouter"
import tutorRouter from "./tutorRouter"
import studentRouter from "./studentRouter"
import moduleRouter from "./moduleRouter"
import contentsRouter from "./contentsRouter"
import projectRouter from "./projectRouter"

const router = Router()
router.use(authRouter)
router.use(classRouter)
router.use(disciplineRouter)
router.use(groupRouter)
router.use(teacherRouter)
router.use(tutorRouter)
router.use(studentRouter)
router.use(moduleRouter)
router.use(contentsRouter)
router.use(projectRouter)

export default router