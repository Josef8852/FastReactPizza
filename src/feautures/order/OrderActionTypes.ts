 type CartIem = {
  pizzaId: number,
  name: string,
  quantity: number,
  unitPrice: number,
  totalPrice: number,
}

export type Order = {
  customer: string,
  phone: number,
  address: string,
  priority: boolean,
  cart: Array<CartIem>,
}

export type OrderErrors = {
  phone? : string 
}

