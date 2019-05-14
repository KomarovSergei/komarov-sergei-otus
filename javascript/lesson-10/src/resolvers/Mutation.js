import uuidv4 from 'uuid/v4'

const Mutation = {
  createCustomer(parent, args, { db }, info) {
    const cart = {
      id: uuidv4(),
      discount: 0,
      totalPrice: 0,
      order: []
    }

    const customer = {
      id: uuidv4(),
      name: args.data.name,
      payment: args.data.payment,
      cart
    }

    cart.customer = customer

    db.carts.push(cart)
    db.customers.push(customer)

    return customer
  },
  updateCustomer(parent, args, { db }, info) {
    if(!args.data.id) {
      throw new Error('No Id in input.')
    }

    const user = db.customers.find(customer => customer.id === args.data.id)

    if(!user) {
      throw new Error('User not found.')
    }

    if(typeof args.data.name === 'string') {
      user.name = args.data.name
    }

    if(typeof args.data.payment === 'string') {
      user.payment = args.data.payment
    }

    return user
  }
}

export { Mutation as default }
