import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import reviewReducer from "../features/reviewSlice";

export const store = configureStore({
  reducer: userReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
