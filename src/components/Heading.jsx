import React from "react";
import List from "./List";
import Button from "./Button";
import Conditional from "./Conditional";
import List2 from "./List2";
import List3 from "./List3";
import Myform from "./Myform";

export default function Heading(props) {
  return (
    <div className="App">
      <h1>AOA I am Bushra Fasial</h1>;
      <li>
        <h1>Well come{props.brand} </h1>
        <List color="red" />

        <Button />
        <Conditional />
        <List2 />
        <List3 />
        <Myform />
      </li>
    </div>
  );
}
