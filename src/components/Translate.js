import React, { useState } from "react";
import Dropdown from "./Dropdown";

const title = `Language`;

const options = [
  { label: "Afrikaans", val: "af" },
  { label: "Arabic", val: "ar" },
  { label: "Hindi", val: "hi" },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <Dropdown
        options={options}
        onSelectedChange={setLanguage}
        selected={language}
        title={title}
      />
    </div>
  );
};

export default Translate;
