import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feautures/user/userSlice"
import cartReducer from "./feautures/cart/cartSlice"

const Store = configureStore({
  reducer: {
    user: userReducer ,
    cart : cartReducer
  }
});

export type MainState = ReturnType<typeof Store.getState>;

export default Store;