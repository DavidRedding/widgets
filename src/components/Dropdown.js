import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, title }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // prettier-ignore

  useEffect(() => {
    // callBack function
    const onBodyClick = (e) => {
      // is the element clicked, inside of our component?
      if (ref.current.contains(e.target)) return;
      // if not
      setOpen(false);
    };

    // first function
    document.body.addEventListener("click", onBodyClick, { capture: true });

    // clean up function
    return () => {
      document.body.removeEventListener("click", onBodyClick, {capture: true, });
    };
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
      <label className="label">Select a {title}</label>
      <div
        onClick={() => setOpen(!open)}
        className={`ui fluid selection dropdown ${open ? "visible active" : ""}`}
      >
        <div className="divider text">{selected.label}</div>
        <i className="dropdown icon"></i>
        <div className={`menu ${open ? "visible transition" : ""}`}>
          {renderedOptions}
        </div> 
      </div>
      <h1 style = {{color: selected.value}}>{`The text will be ${selected.value}!`}</h1>
    </div>
  );
};

export default Dropdown;
