import React, { useState, useEffect } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  // We're only gonna want to run this once
  useEffect(() => {
    document.body.addEventListener("click", () => console.log(`CLICK!!!`));
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;

    return (
      <div
        onClick={() => onSelectedChange(option)}
        key={option.value}
        className="item"
      >
        <span className="text">{option.label}</span>
      </div>
    );
  });

  // prettier-ignore
  // Display

  return (
    <div className="ui form">
      <label className="label">Select a Color</label>
      <div
        onClick={() => setOpen(!open)}
        className={`ui fluid selection dropdown ${open ? "visible active" : ""}`}
      >
        <div className="divider default text">{selected.label}</div>
        <i className="dropdown icon"></i>
        <div className={`menu ${open ? "visible transition" : ""}`}>{renderedOptions}</div>
      </div>
    </div>
  );
};

export default Dropdown;
