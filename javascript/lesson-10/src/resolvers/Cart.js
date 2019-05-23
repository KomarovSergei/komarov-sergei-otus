const Cart = {
  order(parent, args, {
    db
  }, info) {
    let outArr = []
    if(Array.isArray(parent.order)) {  
      for(let i = 0; i < parent.order.length; i++) {
        outArr = outArr.concat(db.orders.filter(order => parent.order[i] === order.id))
      }

      return outArr
    }

    return db.orders.filter(order => parent.order === order.id)
  },
  customer(parent, args, {
    db
  }, info) {
    return db.customers.find(customer => parent.customer === customer.id)
  }
}

export { Cart as default }
