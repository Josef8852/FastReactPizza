import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, {MenuLoader} from "./feautures/menu/Menu";
import Cart from "./feautures/cart/Cart";
import CreateOrder from "./feautures/order/CreateOrder";
import Order, { OrderLoader } from "./feautures/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { OrderAction } from "./feautures/order/OrderAction";

const router = createBrowserRouter([
  {
     // Layout Route
    element: <AppLayout />,
    errorElement : <Error/>  ,
    children: [ // Nested Routes
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
        errorElement : <Error/>  
      },
      {
        path: "/cart",
        element : <Cart/>
      },
      {
        path: "/order/new", 
        element: <CreateOrder />,
        action  :OrderAction 
      },
      {
        path: "/order/:orderID",
        element: <Order />, 
        loader: OrderLoader,
        errorElement : <Error/>  
      }
    ]
  },
  

]);




const App : React.FC = () => {
    
  return <RouterProvider router={router} />
  
  
}



export default App;
