const Customer = {
  cart(parent, args, {
    db
  }, info) {
    return db.carts.find(cart => cart.id === parent.cart)
  }
}

export { Customer as default }
