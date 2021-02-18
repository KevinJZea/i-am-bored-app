import React, { useContext } from "react";
import AppContext from "../context/AppContext";
// import useRecommendations from "../hooks/useRecommendations";

import "../styles/LightMainButton.css";

const API = "https://www.boredapi.com/api/activity/";

const LightMainButton = () => {
  const {
    updateRecommendations,
    themeStyles: { buttonBorder },
  } = useContext(AppContext);
  // let [recommendation, setRecommendation] = useState([]);

  const handleClick = () => {
    // setRecommendation({ recommendation });

    fetch(API)
      .then((response) => response.json())
      .then((data) => updateRecommendations(data));
  };

  return (
    <p
      style={buttonBorder}
      onClick={handleClick}
      type="button"
      className="Button"
    >
      Click for a Random
      <br />
      Recommendation
    </p>
  );
};

export default LightMainButton;
