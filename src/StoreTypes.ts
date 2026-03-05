import Store from "./Store";

export type MainState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;