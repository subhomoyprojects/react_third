import React, { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { count: state.count + 1 };
    }
    case "DECREMENT": {
      return { count: state.count - 1 };
    }
    default:
      return state;
  }
};

export default function CountComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const Increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const Decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>CountComponent {state.count}</h1>
            <button type="button" onClick={Increment}>
              +
            </button>
            <button type="button" onClick={Decrement}>
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
