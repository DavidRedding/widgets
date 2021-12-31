import { useEffect } from "react";
// prettier-ignore

const Route = ({ path, children }) => {
  
  useEffect(() => {
    // callBack 
    const onLocationChange = () => console.log(`Location Changed`);

    // Listening for that popState/navEvent
    window.addEventListener('popstate', onLocationChange());
  }, []);

  // if the current url matches the comp's path, display the comp
  return window.location.pathname === path ? children : null;
};

export default Route;
