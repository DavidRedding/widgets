import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  return (
    <React.Fragment>
      <h4 style={{ marginLeft: "1rem" }}>Enter Search Term</h4>
      <div
        className="ui loading icon input"
        style={{ width: "95%", marginLeft: "1rem" }}
      >
        <input
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          placeholder="Search..."
        />
        <i className="user icon"></i>
      </div>
    </React.Fragment>
  );
};

export default Search;
