import { Identifier } from "typescript"

export type Posts = {
    id: string,
    body: string,
    createdAt: string,
    username: string
}


export type RegisterInput = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

export type User = {
    username: string,
    password: string,
}

export interface Context {
    req: Request;
  }