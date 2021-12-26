import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use react by creating components",
  },
];

export default () => (
  <div>
    <h1>Widgets App</h1> <Accordion items={items} />
  </div>
);
