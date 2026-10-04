import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/Authentication/Slices/authSlice";
import eventsReducer from "../Store/Slices/sharedSlice";

export const store = configureStore({
  reducer: { auth: authReducer, events: eventsReducer },
});
