import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
