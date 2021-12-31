import React, { useState, useEffect } from "react";
import axios from "axios";

// prettier-ignore
const Search = () => {
  const [term, setTerm] = useState("christmas");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedTerm(term), 1000);
    
    return () => clearTimeout(timerId);
    
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Visit
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui container">
      <h4>Enter Search Term</h4>
      <div className="ui loading icon input" style={{ width: "100%" }}>
        <input
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          placeholder="Search..."
        />
        <i className="user icon"></i>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
