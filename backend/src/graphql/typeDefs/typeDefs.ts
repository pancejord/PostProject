import { gql } from "graphql-tag";



module.exports = gql `

type Post {
  id: String!
  username: String!
  createdAt: String!
  body: String!
}
  type Query {
    getPosts: [Post]
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

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!  
    createPost(body: String!): Post!
  }
`;

