import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSelectors";
import { formatCurrency } from "../../utils/helpers";



const CartOverview: React.FC = () => {
  
  const numberofPizzas = useSelector(getTotalCartQuantity);
  
  const totalPrice = useSelector(getTotalCartPrice);
  
  if (!numberofPizzas) return null;
  
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-stone-200 uppercase sm:px-6">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{numberofPizzas} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
