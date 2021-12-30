import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios({
      method: "post",
      url: "https://translation.googleapis.com/language/translate/v2",
      params: {
        q: text,
        target: language.value,
        key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
      },
    });
  }, [language, text]);

  return <h3>rendered conversion</h3>;
};

export default Convert;
