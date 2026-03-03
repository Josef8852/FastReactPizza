import { Link } from "react-router-dom";
import SearchOrder from "../feautures/order/SearchOrder";
import UserName from "../feautures/user/UserName";



const Header  :React.FC = () => {
  
  
  return (
    <header className="flex items-center justify-between bg-yellow-500 uppercase px-4 py-3 border-b border-stone-200 sm:px-6">
      <Link to="/" className="tracking-widest"> Fast React Pizza </Link>
      <SearchOrder />
      <UserName/>
    </header>
  );
  
  
}


export default Header;