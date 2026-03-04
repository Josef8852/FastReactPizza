import { useSelector } from "react-redux";
import type { MainState } from "../../StoreTypes";


const UserName: React.FC = () => {
  
  const username =  useSelector((state : MainState) => state.user.username);
  
  return <div className="hidden text-sm font-semibold md:block">{username}</div>;
  
};

export default UserName;
