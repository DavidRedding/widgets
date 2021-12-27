import React from "react";

const Accordion = ({ items }) => {
  const onTitleClick = (i) => console.log(`Index: ${i} has been clicked`);

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

  return <div className="accordion ui styled">{renderedItems}</div>;
};
export default Accordion;
