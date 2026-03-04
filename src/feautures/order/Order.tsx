import { useLoaderData, type LoaderFunctionArgs } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import type { OrderItemObj } from "./OrderTypes";


const Order: React.FC = () => {
  
  const order = useLoaderData();
  
  
  const {
    id,
    status,
    priority,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="py-6 px-4 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-xl font-semibold">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority ?  <span className="bg-red-500 rounded-full py-1 px-3 text-sm uppercase font-semibold
            text-red-50 tracking-wide">Priority </span> : null}
          <span className="bg-green-500 rounded-full py-1 px-3 text-sm uppercase font-semibold
            text-green-50 tracking-wide">{status} order</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 py-5 px-6">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
      
      <ul className="divide-stone-200 divide-y border-b border-t">
        {cart.map((item : OrderItemObj) => <OrderItem item={item} key={item.pizzaId} />)}
      </ul>

      <div className="space-y-2 bg-stone-200 py-5 px-6"> 
        <p className="text-sm font-medium text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-sm font-medium text-stone-600">Price priority: {formatCurrency(orderPrice*0.2)} 20% of Order</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + orderPrice*0.2)}</p>
      </div>
    </div>
  );
}


export const OrderLoader = async ({params} : LoaderFunctionArgs) => {
  
  const order = await getOrder(params.orderID as string);
  return order;
}

export default Order;
