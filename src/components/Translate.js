import React, { useState } from "react";
import Dropdown from "./Dropdown";
const options = [
  { label: "Afrikaans", val: "af" },
  { label: "Arabic", val: "ar" },
  { label: "Hindi", val: "hi" },
];

const Translate = () => {
  return (
    <div>
      <Dropdown />
    </div>
  );
};

export default Translate;
