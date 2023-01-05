import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {},
});

function reducer(state, action) {
  if (action.type === "up") {
    return { ...state, value: state.value + action.step };
  }
  return state;
}
const initialState = { value: 0 };
const store = createStore(reducer, initialState);

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.value);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "up", step: 2 });
        }}
      >
        +
      </button>{" "}
      {count}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
