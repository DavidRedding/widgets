import React, { useState } from "react";
import Translate from "./components/Translate";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
// import Dropdown from "./components/Dropdown";

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
      <Translate />
      {/* <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> */}
      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
    </div>
  );
};
