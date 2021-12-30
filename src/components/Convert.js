import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log(`language / text has changed !!`);
  }, [language, text]);

  return <h3>rendered conversion</h3>;
};

export default Convert;
