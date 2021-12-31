import React from "react";
// prettier-ignore

const Link = ({ className, href, children }) => (
  <a className={className} href={href}>{children}</a>
);

export default Link;
