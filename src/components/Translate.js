import React, { useState } from "react";
import Dropdown from "./Dropdown";
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
      />
    </div>
  );
};

export default Translate;
