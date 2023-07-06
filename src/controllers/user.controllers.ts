import { Router, Request, Response } from 'express';
import { User } from '../models/User';
import * as EmailValidator from 'email-validator';
import * as helper from '../helpers'

const router: Router = Router();

export async function login(req: Request, res: Response) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !EmailValidator.validate(email)) {
    return res.status(400).json({ auth: false, message: 'Email is required or malformed.' });
  }

  if (!password) {
    return res.status(400).json({ auth: false, message: 'Password is required.' });
  }

  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(404).json({ auth: false, message: 'User was not found..' });
  }

  const authValid = await helper.password.compare(password, user.password);

  if (!authValid) {
    return res.status(400).json({ auth: false, message: 'Password was invalid.' });
  }

  const jwt = await helper.token.generate(user);
  return res.status(200).json({ auth: true, token: jwt });
}

export async function getUsers(req: Request, res: Response) {
  const users = await User.findAll()
  return res.status(200).json({ users })
}

export const AuthRouter: Router = router;
