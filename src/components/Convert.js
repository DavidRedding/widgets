import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log(`language / text has changed !!`);
  }, [language, text]);

  return <h1>lil uzi convert</h1>;
};

export default Convert;
