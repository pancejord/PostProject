import { GraphQLError } from "graphql";

const Post = require("../../models/Post")

const checkAuth = require("../../util/check-auth")

interface Context {
    req: Request;
  }
  

  

module.exports = {
    Mutation: {

        deletePost: async (_: any, args: {postId: string}, context: Context) => {

            const {postId} = args;

            const user = checkAuth(context);

            try {
                const post = await Post.findById(postId)
                if(user.username === post.username){
                    await post.delete()
                } else {
                    throw new GraphQLError("dis aint ur post")
                }
                
            } catch (error) {
                
            }



        },

        createPost: async (_: any, args: {body: string}, context: Context ) => {

            const {body} = args;
            
            const user = checkAuth(context);

            const newPost = new Post({
                body,
                user: user.id,
                username: user.username,
                createdAt: new Date().toISOString()

            })
            const post = await newPost();
            return post;



        },

    },
    Query: {

        getPost: async (_: any, args: {postId: string}) => {
            try {
                const {postId} = args
                
                const post = await Post.findById(postId);

                if(post) {
                    return post 
                } else {
                    throw new Error("No Post Found")
                }


                
            } catch (error: any) {
                throw new Error(error)
                
            }

        },






        getPosts: async (_: any, args: {posts: string}) => {
          try {

            const {posts} = args;
    
            const post = await Post.find().sort({createdAt: -1});
            return post;
            
          } catch (error: any) {
            throw new Error(error)
            
          }
    
        },
      },






}