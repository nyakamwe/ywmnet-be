import { Router, Response, Request } from "express";

const authRouter = Router()

authRouter.get('/login', (req: Request, res:Response) => {
    res.send('Login Route without types')
})

export default authRouter
