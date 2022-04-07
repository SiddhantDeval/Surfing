import React, { useState, useEffect } from "react";
import { createStore } from "redux";
import ToggleButton from "react-bootstrap/ToggleButton";

const initialState = { checked: false };

const reducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE":
      return !state;

    default:
      return state;
  }
};
const store = createStore(reducer);

function App() {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      console.log("subscription", store.getState());
      setState(store.getState());
    });
  }, []);

  const onChange = () => {
    store.dispatch({ type: "TOGGLE" });
  };

  return (
    <>
      regrg
      <ToggleButton type="checkbox" checked={state} onChange={onChange} />
    </>
  );
}

export default App;
