import { Router } from "express"
import authRouter from "./authRouter"
import classRouter from "./classRouter"
import disciplineRouter from "./disciplineRouter"
import groupRouter from "./groupRouter"


const router = Router()
router.use(authRouter)
router.use(classRouter)
router.use(disciplineRouter)
router.use(groupRouter)

export default router