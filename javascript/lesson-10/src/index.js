import { GraphQLServer } from 'graphql-yoga'

const products = [{
  id: 1,
  price: 2.5,
  name: 'test product 1',
  size: 9,
  color: 'wite',
  count: 1
}, {
  id: 2,
  price: 4.5,
  name: 'test product 2',
  size: 15,
  color: 'red',
  count: 2
}, {
  id: 3,
  price: 5.5,
  name: 'test product 3',
  size: 25,
  color: 'blue',
  count: 1
}]

const customers = [{
  id: '1',
  name: 'customer1',
  payment: 'payment1',
  cart: '1'
}, {
  id: '2',
  name: 'customer2',
  payment: 'payment2',
  cart: '2'
}, {
  id: '3',
  name: 'customer3',
  payment: 'payment3',
  cart: '3'
}]

const carts = [{
  id: '1',
  product: '1',
  customer: '1'
}, {
  id: '2',
  product: '2',
  customer: '2'
}, {
  id: '3',
  product: '3',
  customer: '3'
}]

const typeDefs = `
  type Query {
    products: [Product!] !
    customers: [Customer!]!
    carts: [Cart!]!
  }

  type Product {
    id: ID!
    price: Float!
    name: String!
    size: Int!
    color: String!
    count: Int!
  }

  type Customer {
    id: ID!
    name: String!
    payment: String!
    cart: Cart!
  }

  type Cart {
    id: ID
    product: [Product!]!
    customer: Customer
  }
`

const resolvers = {
  Query: {
    products(parent, args, cnt, info) {
      return products
    },
    customers(parent, args, cnt, info) {
      return customers
    },
    carts(parent, args, cnt, info) {
      return carts
    }
  }, 
  Customer: {
    cart(parent, args, ctx, info) {
      return carts.find(cart => {
        return cart.id === parent.cart
      })
    }
  },
  Cart: {
    product(parent, args, ctx, info) {
      return products.filter(prod => {
        return parent.product.toString() === prod.id.toString()
      })
    },
    customer(parent, args, ctx, info) {
      return customers.find(customer => {
        return parent.customer === customer.id
      })
    }
  }
}

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers
})

server.start(() => console.log('The server is up!'))