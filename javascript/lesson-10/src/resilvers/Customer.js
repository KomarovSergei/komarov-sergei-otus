const Customer = {
  cart(parent, args, {
    db
  }, info) {
    return db.carts.find(cart => {
      return cart.id === parent.cart
    })
  }
}

export { Customer as default }