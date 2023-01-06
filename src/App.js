import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

import store from "./store";
import { up } from "./counterSlice";

// set action types & action creators
// then reducer and store
// and compose a component
// After that, return them to root component at the bottom.
// till the basics become solid, start from App.js first,
// then split them as others do.

// Counter component
function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value;
  });
  return (
    <div>
      <button
        onClick={() => {
          dispatch(up(2));
        }}
      >
        +
      </button>{" "}
      {count}
    </div>
  );
}

// root component
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
