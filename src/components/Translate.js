import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Dutch", value: "nl" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Greek", value: "el" },
  { label: "Spanish", value: "es" },
];

// prettier-ignore
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div style={{ marginTop: "1rem" }}>
     
      <label className="label">Enter Text:</label>
      <div className="ui fluid input">
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Search a Phrase..."
        />
      </div>

      
      <div style={{ marginTop: "2rem" }}>
        <Dropdown
          options={options}
          onSelectedChange={setLanguage}
          selected={language}
          title={"Language"}
        />
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <h3 className="ui header">Output:</h3>
        <Convert language = {language} text = {text}/>
      </div>

    </div>
  );
};

export default Translate;
