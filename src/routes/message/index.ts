import { Router } from "express";
import { listMessages, sendMessage } from '../../controllers/message.controllers'
import { requireAuth } from '../../middlewares/authorization'

const messageRouter = Router()

messageRouter.get('/', requireAuth, listMessages)
messageRouter.post('/create', sendMessage)

export default messageRouter
