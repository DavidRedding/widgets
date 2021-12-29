import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <h1>Widgets App</h1>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
    </div>
  );
};

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front-end javascript framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite JS library among engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use react by creating components",
//   },
// ];
