import { Router } from 'express'
import authRouter from './auth'
import postRouter from './post'
import partnerRouter from './partner'
import messageRouter from './message'

const router = Router()

router.use('/auth', authRouter)
router.use('/posts', postRouter)
router.use('/partners', partnerRouter)
router.use('/messages', messageRouter)

export default router
