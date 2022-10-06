import { Router } from "express"
import authRouter from "./authRouter"
import classRouter from "./classRouter"
import disciplineRouter from "./disciplineRouter"
import groupRouter from "./groupRouter"
import teacherRouter from "./teacherRouter"


const router = Router()
router.use(authRouter)
router.use(classRouter)
router.use(disciplineRouter)
router.use(groupRouter)
router.use(teacherRouter)

export default router