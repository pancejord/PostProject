import { gql } from "graphql-tag";



module.exports = gql `



type Post {
  id: ID!
  username: String!
  createdAt: String!
  body: String!
  likes: [Like]!
  comments: [Comment]!
  likeCount: Int!
  commentCount: Int!
}

type Subscription {
  newPost: Post!
}

type Query {
  getPosts: [Post]
  getPost(postId: ID!): Post
}

type Mutation {
  register(registerInput: RegisterInput): User!
  login(username: String!, password: String!): User!
  createPost(body: String!): Post!
  deletePost(postId: ID!): String!
  createComment(postId: ID!, body: String!): Post!
  deleteComment(postId: ID!, commentId: ID!): String!
  likePost(postId: ID!): Post!
}


type Comment {
  id: ID!
  createdAt: String!
  username: String!
  body: String!
}

type Like {
  id: ID!
  createdAt: String!
  username: String!
}

type User {
  id: ID!
  email: String!
  token: String!
  username: String!
  createAt: String!
}

input RegisterInput {
  username: String!
  password: String!
  confirmPassword: String!
  email: String!
}


  
  
`;

