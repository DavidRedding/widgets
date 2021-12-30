import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
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
    </div>
  );
};

export default Translate;
