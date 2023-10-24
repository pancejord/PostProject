const jwt = require('jsonwebtoken');
const {AuthenticationError} = require('apollo-server')
import { Request } from 'express';

interface Context {
    req: Request;
  }

const SECRET_KEY = process.env.SECRET_KEY;


module.exports = (context: Context) => {

    const authHeader = context.req.headers.authorization;

    if(authHeader) {
        const token = authHeader.split('Bearer ')[1];
        if(token){
            try{
                const user = jwt.verify(token, SECRET_KEY);
                return user;
            } catch(error: any){
                throw new AuthenticationError("Invalid/Expired Token")

            }
        }
        throw new Error("Authentication token must be \'Bearer [token]")
    }
    throw new Error("Authorization header must be provided");



}