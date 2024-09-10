import { useReducer, useState } from "react";
import TestReducer from "./TestReducer";

export default function TestComponent(props: any) {
  const [storeState, storeDispatch] = useReducer(TestReducer, { store: 7 });

  const clickHandler = (e: any) => {
    storeDispatch({ type: "bump" });
  };

  return <h1 onClick={clickHandler}>{storeState?.store}</h1>;
}
