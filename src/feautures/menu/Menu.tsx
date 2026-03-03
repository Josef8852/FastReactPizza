import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import type { Pizza } from "./MenuTypes";



const Menu: React.FC = () => {
  
  const menu = useLoaderData();
  
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza: Pizza) => <MenuItem pizza={pizza} key={pizza.id} />) }
    </ul>
  )
  
}


export const MenuLoader = async () => {
  
  const menu = await getMenu();
  return menu;
  
}




export default Menu;
