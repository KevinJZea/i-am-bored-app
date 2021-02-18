import React, { useContext } from "react";
import AppContext from "../context/AppContext";

import "../styles/DarkModeButton.css";

const DarkModeButton = () => {
  const {
    state,
    themeStyles: { button },
    updateDarkMode,
  } = useContext(AppContext);
  const { darkMode } = state;

  // const [darkMode, setDarkMode] = useState(false);

  return (
    <button
      style={button}
      className="DarkModeButton"
      type="button"
      onClick={updateDarkMode}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeButton;
