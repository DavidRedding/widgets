import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  //runs with every render
  console.log(`GUIDE: I RUN @ EVERY RENDER`);

  // only run once
  useEffect(() => console.log(`I ONLY RUN ONCE`), []);

  // runs on initial, then after each re-render
  useEffect(() => console.log(`I RUN AT INITIAL & AFTER RE-RENDER`));

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
