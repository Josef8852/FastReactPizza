import { updateOrder } from "../../services/apiRestaurant";
import type { ActionFunctionArgs } from "react-router-dom";

export const UpdateOrderAction = async ({params} :ActionFunctionArgs) => {
  
  const data = {priority :true}
  await updateOrder(params.orderID!, data);

}