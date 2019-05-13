const Order = {
  product(parent, args, { db }, info) {
    return db.products.find(prod => parent.product.toString() === prod.id.toString())
  }
}

export { Order as default }
