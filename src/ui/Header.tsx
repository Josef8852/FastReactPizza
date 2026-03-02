import { Link } from "react-router-dom";
import SearchOrder from "../feautures/order/SearchOrder";



const Header  :React.FC = () => {
  
  
  return (
    <header>
      <Link to="/"> Fast React Pizza </Link>
      <SearchOrder/>
    </header>
  );
  
  
}


export default Header;