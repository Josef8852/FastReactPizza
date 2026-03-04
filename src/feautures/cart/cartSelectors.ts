import { type MainState } from "../../StoreTypes";
import { createSelector } from "@reduxjs/toolkit";

export const selectCart = (state: MainState) => state.cart.cart;

export const getTotalCartQuantity = createSelector(selectCart, (cart) =>
  cart.reduce((sum, item) => sum + item.quantity, 0));

export const getTotalCartPrice = createSelector(selectCart, (cart) =>
  cart.reduce((sum, item) => sum + item.totalPrice, 0));
  

export const getcurrentQuantity = (id: number) =>
  createSelector(selectCart, (cart) => cart.find((item) => item.pizzaId === id)?.quantity ?? 0)

