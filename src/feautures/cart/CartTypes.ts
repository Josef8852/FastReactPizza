

export type CartItemObj = {
  pizzaId: number,
  name: string,
  quantity: number,
  unitPrice: number,
  totalPrice: number,
}

export interface CartItemProps {
  item : CartItemObj
}


export type CartInitState = {
  cart: Array<CartItemObj>;
}