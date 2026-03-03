import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../feautures/cart/CartOverview"
import Header from "./Header"
import Loader from "./Loader";




const AppLayout: React.FC = () => {
  
  const navigation = useNavigation();
  
  const isLoading = navigation.state === "loading";
  
  return (
    <div className="grid dheight grid-rows-[auto_1fr_auto]">
        
      {isLoading ? <Loader/> : null}
      
      <Header />
      
      <div className="overflow-scroll">
      <main className="max-w-3xl  mx-auto">
          <Outlet/>
      </main>
      </div>
      
      <CartOverview/>

    </div>
  )
  
}



export default AppLayout