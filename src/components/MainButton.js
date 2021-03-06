import React, { useContext } from "react";
import AppContext from "../context/AppContext";
// import useRecommendations from "../hooks/useRecommendations";

import "../styles/MainButton.css";

const API = "https://www.boredapi.com/api/activity/";

const MainButton = () => {
  const {
    updateRecommendations,
    themeStyles: { button },
  } = useContext(AppContext);
  // let [recommendation, setRecommendation] = useState([]);

  const handleClick = () => {
    // setRecommendation({ recommendation });

    fetch(API)
      .then((response) => response.json())
      .then((data) => updateRecommendations(data));
  };

  return (
    <button
      style={button}
      onClick={handleClick}
      type="button"
      className="Button"
    >
      Click for a Random
      <br />
      Recommendation
    </button>
  );
};

export default MainButton;
