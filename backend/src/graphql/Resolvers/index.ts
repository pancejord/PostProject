const postsResolvers = require("./posts")
const usersResolvers = require("./users")
const commentsResolvers = require("./comments")
import { Posts } from "../../types";

module.exports = {


    Post: {
        likeCount: (post: Posts) => post.likes.length,
        commentCount: (comment: Posts) => comment.comments.length
    },
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentsResolvers.Mutation

    },
    Subscription: {
        ...postsResolvers.Subscription
    }
}