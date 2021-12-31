/* if the current url matches the comp's path, display the comp */

const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;
