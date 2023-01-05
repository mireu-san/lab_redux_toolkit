import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "counter",
});

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
