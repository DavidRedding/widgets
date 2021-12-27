import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    // circumvents error msg
    if (term) return search();
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
