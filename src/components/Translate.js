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

  return (
    <div style={{ marginTop: "1rem" }}>

      <label className="label">Enter Text:</label>
      <div className="ui fluid focus input">
        <input placeholder="Search a Phrase..." />
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
