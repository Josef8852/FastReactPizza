import { formatCurrency } from "../../utils/helpers";
import type { CartItemProps } from "./CartTypes";
import ControlItem from "../../ui/ControlItem";



const CartItem: React.FC<CartItemProps> = ({ item }) => {
  
  const { pizzaId, name, quantity, totalPrice } = item;
  
  
  
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <ControlItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
