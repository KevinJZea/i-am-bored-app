import React, { useContext } from "react";
import AppContext from "../context/AppContext";

import "../styles/LightDarkModeButton.css";

const LightDarkModeButton = () => {
  const {
    state,
    themeStyles: { buttonBorder },
    updateDarkMode,
  } = useContext(AppContext);
  const { darkMode } = state;

  return (
    <p style={buttonBorder} onClick={updateDarkMode} className="ButtonChanger">
      {darkMode ? "Light Mode" : "Dark Mode"}
    </p>
  );
};

export default LightDarkModeButton;
