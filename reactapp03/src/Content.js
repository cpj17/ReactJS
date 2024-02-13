import React from "react";
import * as coms from "./CommonVariables"
import objArr from "./CommonVariables"

const Content = () => {
  coms.func1()
  coms.func2()

  return (
    <div>
      <h1> This is content js </h1>
      <h3> {objArr["key1"]} </h3>
    </div>
  );
};

export default Content;