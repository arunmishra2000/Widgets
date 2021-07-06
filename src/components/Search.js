import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  console.log("I run with every rerender");
  useEffect(() => {
    const search = async () => {
      await axios.get(
        "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming"
      );
    };
    search();
  }, [term]);
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
