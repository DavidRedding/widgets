import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

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
    // initial render
    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) return search();
      }, 1000);

      // Clean-up Function
      return () => clearTimeout(timeoutId);
    }
  }, [term]);

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
