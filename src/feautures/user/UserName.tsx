import { useSelector } from "react-redux";
import type { RootState } from "../../Store";


const UserName: React.FC = () => {
  
  const username =  useSelector((state : RootState) => state.user.username);
  
  return <div className="hidden text-sm font-semibold md:block">{username}</div>;
  
};

export default UserName;
