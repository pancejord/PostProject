import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
require('dotenv').config();

const mongoose = require('mongoose');
const Post = require('./models/Post');
const resolvers = require("./graphql/Resolvers")
const typeDefs = require("./graphql/typeDefs/typeDefs")




const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, { useNewUrlParser: true });
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`Server is running at ${url}`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

startServer();
