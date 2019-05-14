import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query'
import Customer from './resolvers/Customer'
import Cart from './resolvers/Cart'
import Order from './resolvers/Order'
import Mutation from './resolvers/Mutation'

const server = new GraphQLServer({
  typeDefs: './src/shema.graphql',
  resolvers: {
    Query,
    Customer,
    Cart,
    Order,
    Mutation
  },
  context: {
    db
  }
})

server.start(() => console.log('The server is up!'))
