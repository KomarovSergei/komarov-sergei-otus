import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query'
import Customer from './resolvers/Customer'
import Cart from './resolvers/Cart'
import Order from './resolvers/Order'

const server = new GraphQLServer({
  typeDefs: './src/shema.graphql',
  resolvers: {
    Query,
    Customer,
    Cart,
    Order
  },
  context: {
    db
  }
})

server.start(() => console.log('The server is up!'))
