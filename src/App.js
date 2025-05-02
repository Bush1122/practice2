import Heading from "./components/Heading";
import React from "react";
import Add, { Multiply, Divide } from "./components/Math";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <li>
        <Add />{" "}
      </li>
      <li>{Multiply(2, 3)}</li>
      <li>{Divide(4, 9)}</li>
    </div>
  );
}
