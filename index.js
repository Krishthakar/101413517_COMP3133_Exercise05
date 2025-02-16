const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/movie/movieSchema');
const resolvers = require('./resolvers/movieResolvers');

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(res => {
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () =>
    console.log('Server running at http://localhost:4000' + server.graphqlPath)
  );
});
