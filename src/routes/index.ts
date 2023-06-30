import { Router } from 'express'
import authRouter from './auth'
import postRouter from './post'
import partnerRouter from './partner'

const router = Router()

router.use('/auth', authRouter)
router.use('/posts', postRouter)
router.use('/partners', partnerRouter)

export default router
