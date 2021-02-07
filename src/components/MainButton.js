import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import useRecommendations from "../hooks/useRecommendations";

import "../styles/MainButton.css";

const API = "https://www.boredapi.com/api/activity/";

const MainButton = () => {
  const { updateRecommendations } = useContext(AppContext);
  let newRecommendation = useRecommendations(API);

  const handleClick = () => {
    updateRecommendations(newRecommendation);
  };

  return (
    <button onClick={handleClick} type="button" className="Button">
      Click for a Random
      <br />
      Recommendation
    </button>
  );
};

export default MainButton;
