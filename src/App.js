import React from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

export default () => (
  <div className="ui container">
    <h1>Widgets App</h1>
    <Dropdown />
    {/* <Search /> */}
    {/* <Accordion items={items} /> */}
  </div>
);

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
