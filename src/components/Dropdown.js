import React from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderedOptions = options.map((option) => {
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

  // Display

  return (
    <div className="ui form">
      <label className="label">Select a Color</label>
      <div className="ui fluid selection dropdown visible active ">
        <div className="divider default text">{selected.label}</div>
        <i className="dropdown icon"></i>
        <div className="menu visible transition">{renderedOptions}</div>
      </div>
    </div>
  );
};

export default Dropdown;
