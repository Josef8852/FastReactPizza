import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import type { MenuItemProps } from "./MenuTypes";
import { addItem } from "../cart/cartSlice";

const MenuItem: React.FC<MenuItemProps> = ({ pizza }) => {
  
  const dispatch = useDispatch()
  
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const handleAddToCart = () : void  => {
    
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    
    dispatch(addItem(newItem));
    
  }
  
  
  return (
    <li className="flex gap-4 py-2">
      <img className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}` } src={imageUrl} alt={name} />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
          {!soldOut ? <Button onClick={handleAddToCart} type="small">Add to Cart</Button> : null}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
