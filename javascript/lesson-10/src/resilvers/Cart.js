const Cart = {
  product(parent, args, {
    db
  }, info) {
    return db.products.filter(prod => {
      return parent.product.toString() === prod.id.toString()
    })
  },
  customer(parent, args, {
    db
  }, info) {
    return db.customers.find(customer => {
      return parent.customer === customer.id
    })
  }
}

export { Cart as default }