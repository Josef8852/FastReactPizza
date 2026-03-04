import type { MainState } from "../../StoreTypes";


export const selectUserName = (state: MainState) => state.user.username;