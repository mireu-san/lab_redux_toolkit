import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

// store - slice file
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
