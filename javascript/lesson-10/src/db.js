const products = [
  { id: '1', price: 2.5, name: 'test product 1', size: 9, color: 'wite', count: 1 }, 
  { id: '2', price: 4.5, name: 'test product 2', size: 15, color: 'red', count: 2 },
  { id: '3', price: 5.5, name: 'test product 3', size: 25, color: 'blue', count: 1 }
]

const customers = [
  { id: '1', name: 'customer1', payment: 'payment1', cart: '1' },
  { id: '2', name: 'customer2', payment: 'payment2', cart: '2' },
  { id: '3', name: 'customer3', payment: 'payment3', cart: '3'}
]

const carts = [
  { id: '1', order: ['1', '2'], customer: '1' },
  { id: '2', order: '2', customer: '2' },
  { id: '3', order: '3', customer: '3' }
]

const orders = [
  { id: '1', product: '1', count: 1 },
  { id: '2', product: '2', count: 2 },
  { id: '3', product: '3', count: 3 }
]

const db = { products, customers, carts, orders }

export { db as default }
