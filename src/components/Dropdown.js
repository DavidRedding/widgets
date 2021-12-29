import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // prettier-ignore

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      
      // is the element clicked, inside of our component?
      if(ref.current.contains(e.target)) return;
      
      // if not
      setOpen(false);
    },
      { capture: true } // react v.17
    );
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
    <div ref={ref} className="ui form">
      <label className="label">Select a Color</label>
      <div
        onClick={() => setOpen(!open)}
        className={`ui fluid selection dropdown ${
          open ? "visible active" : ""
        }`}
      >
        <div className="divider default text">{selected.label}</div>
        <i className="dropdown icon"></i>
        <div className={`menu ${open ? "visible transition" : ""}`}>
          {renderedOptions}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
