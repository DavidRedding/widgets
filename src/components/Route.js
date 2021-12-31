import React, { useState, useEffect } from "react";
// prettier-ignore

const Route = ({ path, children }) => {
  // solely created to get Route to re-render itself
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
  useEffect(() => {
    // cB: whenever path changes, Route re-renders the conditional
    const onLocationChange = () => setCurrentPath(window.location.pathname)

    // Listening for that popState/navEvent
    window.addEventListener('popstate', onLocationChange);
    
    // clean-up
    return () => window.removeEventListener('popstate', onLocationChange); 

  }, []);

  // if the current url matches the comp's path, display the comp
  return currentPath === path ? children : null;
};

export default Route;
