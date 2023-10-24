import { GraphQLError } from "graphql";
import { Context } from "../../types";
const checkAuth = require("../../util/check-auth")
const Post = require("../../models/Post")

module.exports = {

Mutation: {

    createComment: async (_: any, args: {body: string, postId: string}, context: Context ) => {

        const {body, postId} = args;

        const user = checkAuth(context);

        if(body.trim() === "") {
            throw new GraphQLError("Comment cannot be empty")
        }

        const post = await Post.findById(postId);

        if(post) {
            post.comments.unshift({
                
            })
        }
    





    },



    deleteComment: async (_: any, args: {postId: string}, context: Context) => {

    }





}









}