import * as jwt from 'jsonwebtoken';
import * as c from '../../config/config';
import { User } from '../../models/User'

export function generateJWT(user: User): string {
    return jwt.sign(user.email, c.config.jwt.secret);
}
