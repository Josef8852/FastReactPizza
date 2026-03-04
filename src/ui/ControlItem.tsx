import Button from "./Button"
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from "../feautures/cart/cartSlice"
import type { ControlItemProps } from "./UITypes";
import { useDispatch } from "react-redux";

const ControlItem : React.FC<ControlItemProps> = ({pizzaId ,quantity}) => {
  
  const dispatch = useDispatch();
  
  const handleDecrease = () : void => {
    dispatch(decreaseItemQuantity(pizzaId));
  }
  
  const handleIncrease = () : void => {
    dispatch(increaseItemQuantity(pizzaId));
  }
  
  
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1 md:gap-3 mx-3">
        <Button onClick={handleDecrease} type="round">-</Button>
        <span>{quantity}</span>
        <Button onClick={handleIncrease} type="round">+</Button>
      </div>
      <Button onClick={() => dispatch(removeItem(pizzaId))}  type="small">Delete</Button>
    </div>
  )
  
}


export default ControlItem;