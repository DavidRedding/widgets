import React from "react";
// de-structure stops the need for props. prefix

const Dropdown = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} className="item">
        <span className="text">{option.label}</span>
      </div>
    );
  });

  // Display
  return (
    <div className="ui form">
      <label className="label">Select a Color</label>
      <div className="ui fluid selection dropdown visible active ">
        <div className="divider default text">Select Color</div>
        <i className="dropdown icon"></i>
        <div className="menu visible transition">{renderedOptions}</div>
      </div>
    </div>
  );
};

export default Dropdown;
