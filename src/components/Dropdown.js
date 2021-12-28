import React from "react";
// de-structure stops the need for props. prefix

const Dropdown = ({ options }) => {
  console.log(options[0]);

  return <h2>Dropdown Menu</h2>;
};

export default Dropdown;
