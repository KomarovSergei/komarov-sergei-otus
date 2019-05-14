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
    console.log('here')

    return customer
  }
}

export { Mutation as default }
