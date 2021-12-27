import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  // runs on initial, then after each re-render
  // our request takes more steps than a class-based to avoid error
  useEffect(() => {
    const search = async () => {
      await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
    };

    search();
  }, [term]);

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
