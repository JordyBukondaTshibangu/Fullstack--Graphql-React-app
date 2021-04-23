const { ApolloServer } = require('apollo-server') ;
const { PrismaClient } = require('@prisma/client') ;
const  typeDefs = require('./schema.js') ;
const resolvers = require('./resolver.js') ;
const PeopleAPI = require('./datasources/people.js') ;

const prisma = new PrismaClient();

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources : () => ({
        PeopleAPI : new PeopleAPI()
    }),
    context: {
      prisma,
    }
});

server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/dev
    `);
  });