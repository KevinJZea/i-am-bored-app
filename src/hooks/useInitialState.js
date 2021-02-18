import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  let { darkMode } = state;

  const updateRecommendations = (payload) => {
    setState({
      ...state,
      recommendations: [payload],
    });
  };

  const themeStyles = {
    body: {
      background: darkMode ? "#303030" : "#f3f8fb",
      color: darkMode ? "white" : "black",
    },
    button: {
      background: darkMode ? "#454545" : "#fff",
      color: darkMode ? "white" : "black",
    },
    text: {
      color: darkMode ? "white" : "black",
    },
    buttonBorder: {
      border: darkMode ? "1px solid white" : "1px solid black",
      color: darkMode ? "white" : "black",
      background: darkMode ? "none" : "#fff",
    },
  };

  const updateDarkMode = () => {
    setState({
      ...state,
      darkMode: !darkMode,
    });
  };

  return {
    updateRecommendations,
    updateDarkMode,
    themeStyles,
    state,
  };
};

export default useInitialState;
