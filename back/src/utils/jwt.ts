import jwt from 'jsonwebtoken';

import authConfig from '../config/auth.js';

export function generateToken(params:any){
  return jwt.sign(params, authConfig.secret, {expiresIn: authConfig.expiresIn })
}

export function generateRefreshToken(user:string){
  return jwt.sign(JSON.stringify(user), authConfig.refreshSecret)
}

export function jwtVerify(refresh:string){
  return jwt.verify(refresh, authConfig.refreshSecret);
}

