import React from "react";

const Search = () => {
  return (
    <React.Fragment>
      <h4 style={{ marginLeft: "1rem" }}>Enter Search Term</h4>
      <div
        className="ui loading icon input"
        style={{ width: "96%", marginLeft: "1rem" }}
      >
        <input type="text" placeholder="Search..." />
        <i className="user icon"></i>
      </div>
    </React.Fragment>
  );
};

export default Search;
