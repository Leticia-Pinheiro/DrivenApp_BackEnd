import { Router } from "express"
import authRouter from "./authRouter"
import classRouter from "./classRouter"
import disciplineRouter from "./disciplineRouter"


const router = Router()
router.use(authRouter)
router.use(classRouter)
router.use(disciplineRouter)

export default router