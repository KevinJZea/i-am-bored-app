import React, { useContext } from "react";
import AppContext from "../context/AppContext";

import "../styles/Header.css";

const Header = () => {
  const {
    themeStyles: { body },
  } = useContext(AppContext);

  return (
    <header style={body} className="Header">
      <h2 className="Header__Title">Welcome to the I-Am-Bored App!</h2>
      <h3 className="Header__Subtitle">
        Hope you get excellent ideas for new projects
      </h3>
    </header>
  );
};

export default Header;
