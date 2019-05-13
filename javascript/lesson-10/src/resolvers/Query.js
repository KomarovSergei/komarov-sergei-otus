const Query = {
  products(parent, args, {
    db
  }, info) {
    return db.products
  },
  customers(parent, args, {
    db
  }, info) {
    return db.customers
  },
  carts(parent, args, {
    db
  }, info) {
    return db.carts
  },
  orders(parent, args, { db }, info) {
    return db.orders
  }
}

export { Query as default }
