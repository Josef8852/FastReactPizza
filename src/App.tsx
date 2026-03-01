import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./feautures/menu/Menu";
import Cart from "./feautures/cart/Cart";
import CreateOrder from "./feautures/order/CreateOrder";
import Order from "./feautures/order/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />, // Layout Route
    children: [ // Nested Routes
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/cart",
        element : <Cart/>
      },
      {
        path: "/order/new", 
        element : <CreateOrder/>
      },
      {
        path: "/order/:orderID",
        element : <Order/>
      }
    ]
  },
  

]);




const App : React.FC = () => {
    
  return <RouterProvider router={router} />
  
  
}



export default App;
