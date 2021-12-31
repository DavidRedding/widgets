import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    // stop page from reloading
    e.preventDefault();

    // changes URL w/o reload
    window.history.pushState({}, "", href);

    // tells Route comps that the URL has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};
export default Link;
