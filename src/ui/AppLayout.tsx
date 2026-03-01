import { Outlet } from "react-router-dom"
import CartOverview from "../feautures/cart/CartOverview"
import Header from "./Header"




const AppLayout: React.FC = () => {
  
  
  return (
    <div>
      <Header />
      
      <main>
          <Outlet/>
      </main>

      <CartOverview/>

    </div>
  )
  
}



export default AppLayout