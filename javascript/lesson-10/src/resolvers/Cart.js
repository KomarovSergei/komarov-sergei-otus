const Cart = {
  order(parent, args, {
    db
  }, info) {
    return db.orders.filter(order => parent.order.toString() === order.id.toString())
  },
  customer(parent, args, {
    db
  }, info) {
    return db.customers.find(customer => parent.customer === customer.id)
  }
}

export { Cart as default }
