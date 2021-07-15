const route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default route;
