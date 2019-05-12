import { GraphQLServer } from 'graphql-yoga'
import db from './db.js'
import Query from './resilvers/Query.js'
import Customer from './resilvers/Customer.js'
import Cart from './resilvers/Cart.js'

const server = new GraphQLServer({
  typeDefs: './src/shema.graphql',
  resolvers: {
    Query,
    Customer,
    Cart
  },
  context: {
    db
  }
})

server.start(() => console.log('The server is up!'))