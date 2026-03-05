import { type CartItemObj } from "../cart/CartTypes"

export type OrderType = {
  customer: string,
  phone: number,
  address: string,
  priority: boolean,
  cart: Array<CartItemObj>,
  id: string;
}

export type OrderErrors = {
  phone? : string 
}


export type OrderItemObj = {
  addIngredients: Array<string>; 
  name: string; 
  pizzaId: number; 
  quantity: number; 
  removeIngredients: Array<string>;
  totalPrice: number; 
  unitPrice: number;
}

export interface OrderItemProps {
  item: OrderItemObj
  isLoadingIngredients: boolean;
  ingredients : Array<string>
}
