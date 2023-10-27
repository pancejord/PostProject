import { GraphQLError, graphqlSync } from "graphql";
import { Context } from "../../types";
const checkAuth = require("../../util/check-auth")
const Post = require("../../models/Post")


type ID = string;


module.exports = {

Mutation: {

    createComment: async (_: any, args: {body: string, postId: ID}, context: Context ) => {

        const {body, postId} = args;

        const {user} = checkAuth(context);

        if(body.trim() === "") {
            throw new GraphQLError("Comment cannot be empty")
        }

        const post = await Post.findById(postId);

        if(post){
            post.comments.unshift({
                body,
                username: user,
                createdAt: new Date().toISOString(),
            });
            await post.save;
            return post;
        } else throw new GraphQLError("Post Not Found")


    





    },



    deleteComment: async (_: any, args: {postId: ID, commentId: ID}, context: Context) => {

        const { postId, commentId } = args;

        const user = checkAuth(context);

        const post = await Post.findById(postId);
        
        if(post){
            const commentIndex = post.comments.findIndex((c: {id: ID}) => c.id === commentId);
    
            if(post.comments[commentIndex].username === user.username){
              post.comments.splice(commentIndex, 1);
              await post.save();
              return post;
            } else {
              throw new GraphQLError('Action not allowed')
            }
          } else {
            throw new GraphQLError('Post not found');
          }
        }
      }

    }
    








