import { PubSub } from "graphql-subscriptions"
import { Identifier } from "typescript"

export type Posts = {
    id: string,
    body: string,
    createdAt: string,
    username: string,
    likes: Like[],
    comments: Comment[]
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
    pubsub: PubSub
  }


  export type Like = {
    id: string
    createdAt: string
    username: string

  }