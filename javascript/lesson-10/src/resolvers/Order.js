const Order = {
  product(parent, args, { db }, info) {
    return db.products.find(prod => parent.product === prod.id)
  }
}

export { Order as default }
