import { Router, Response, Request } from "express";
import { login, getUsers } from "../../controllers/user.controllers";

const authRouter = Router()

authRouter.post('/login', login)
authRouter.get('/users', getUsers)


export default authRouter
