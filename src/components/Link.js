import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    // stop page from relooading
    e.preventDefault();
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};
export default Link;
