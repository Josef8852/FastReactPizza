import { useSelector } from "react-redux";
import CreateUser from "../feautures/user/CreateUser";
import type { MainState } from "../Store";
import Button from "./Button";


const Home: React.FC = () => {
  
  const username  = useSelector((state : MainState) => state.user.username);
  
  
  return (
    <div className="my-10 text-center sm:my-16 px-4">
      <h1 className=" text-xl font-semibold mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500"> Straight out of the oven, straight to you.</span>
      </h1>
      {username === "" ? <CreateUser /> : <Button route="/menu" type="primary">Continue ordering, {username}</Button>} 
    </div>
  );
};

export default Home;
