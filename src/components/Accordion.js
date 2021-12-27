import React, { useState } from "react";

const Accordion = ({ items }) => {
  // initializes a new state
  const [activeIndex, setActiveIndex] = useState(null);

  // updates our value of state
  const onTitleClick = (i) => setActiveIndex(i);

  const renderedItems = items.map((item, i) => {
    return (
      <React.Fragment key={item.title}>
        <div className="active title" onClick={() => onTitleClick(i)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="accordion ui styled">
      {renderedItems}
      {/* displays our state */}
      <h1>{activeIndex}</h1>
    </div>
  );
};
export default Accordion;
