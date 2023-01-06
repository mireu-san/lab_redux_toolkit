import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// store, imported slice file as counterReducer
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
