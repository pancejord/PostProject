const Post = require("../../models/Post")

module.exports = {
    Query: {
        getPosts: async (_: any, args: {posts: string}, context: {}) => {
          try {
    
    
            const posts = await Post.find();
            return posts;
            
          } catch (error: any) {
            throw new Error(error)
            
          }
    
        },
      },






}