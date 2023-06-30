import { Router, Response, Request } from "express";
import { login, getUsers } from "../../controllers/user.controllers";
import { requireAuth } from '../../middlewares/authorization'

const authRouter = Router()

authRouter.post('/login', login)
authRouter.get('/users', getUsers)
authRouter.get('/verification',
    requireAuth,
    async (req: Request, res: Response) => {
      return res.status(200).send({auth: true, message: 'Authenticated.'});
});


export default authRouter
