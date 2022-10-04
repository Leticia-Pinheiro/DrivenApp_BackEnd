import { Router } from "express"
import authRouter from "./authRouter"
import classRouter from "./classRouter"


const router = Router()
router.use(authRouter)
router.use(classRouter)

export default router