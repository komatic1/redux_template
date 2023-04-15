import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

// это state (состояние которое будет храниться в store)
const initialState = { value: 0 };
// reducer - функция для обновления state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        value: state.value + 1,
      };
    case "DEC":
      return {
        ...state,
        value: state.value - 1,
      };
    case "RND":
      return {
        ...state,
        value: state.value * action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const update = () => {
  document.getElementById("counter").textContent = store.getState().value;
};

// срабатывает каждый раз когда диспатчится какоето действие
store.subscribe(update);

const inc = () => ({ type: "INC" });
const dec = () => ({ type: "DEC" });
const rnd = (value) => ({ type: "RND", payload: value });

document.getElementById("inc").addEventListener("click", () => {
  store.dispatch(inc());
});

document.getElementById("dec").addEventListener("click", () => {
  store.dispatch(dec());
});

document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
});

// иницализация глобального state
// let state = reducer(undefined, { type: "INC" });
// state = reducer(state, { type: "INC" });
// state = reducer(state, { type: "INC" });
// state = reducer(state, { type: "INC" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);
