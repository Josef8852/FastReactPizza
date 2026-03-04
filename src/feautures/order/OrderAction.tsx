import { redirect, type ActionFunctionArgs } from "react-router-dom"
import { createOrder } from "../../services/apiRestaurant";
import { isValidPhone } from "../../utils/helpers";
import { type OrderErrors ,type Order } from "./OrderTypes";
import Store from "../../Store";
import { clearCart } from "../cart/cartSlice";



export const OrderAction = async ({ request }: ActionFunctionArgs): Promise<Response| OrderErrors> => {
  const formData = await request.formData();
  
  const data: Record<string, string> = Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [key, value.toString()])
  );


  const order : Order = {
    address : data.address ,
    cart: JSON.parse(data.cart) ,
    priority: data.priority === "true",
    phone: Number(data.phone),
    customer: data.customer
  }

  const errors: OrderErrors = {}
  
  
  if (!isValidPhone(data.phone)) 
  {
    errors.phone = "Please give us your correct Phone Number . We might need to contact you.";
  }
  
  if (Object.keys(errors).length === 0) {
    const newOrder = await createOrder(order);
    Store.dispatch(clearCart());
    return  redirect(`/order/${newOrder.id}`);
  }
  else {
    return errors;
  }
  
  
 
} 