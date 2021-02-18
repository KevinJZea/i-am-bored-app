import React, { useContext } from "react";
import AppContext from "../context/AppContext";

import "../styles/LightRecommendation.css";

const LightRecommendation = ({
  activity,
  type,
  participants,
  price,
  accessibility,
}) => {
  const {
    themeStyles: { buttonBorder },
  } = useContext(AppContext);

  type = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <article style={buttonBorder} className="Recommendation">
      <h3 className="Recommendation__Title">{activity}</h3>
      <p className="Recommendation__Info">
        <strong>Type:</strong> {type}
      </p>
      <p className="Recommendation__Info">
        <strong>Participants:</strong> {participants}
      </p>
      <p className="Recommendation__Info">
        <strong>Price:</strong> ${price}
      </p>
      <p className="Recommendation__Info">
        <strong>Accessibility:</strong> {accessibility}
      </p>
    </article>
  );
};

export default LightRecommendation;
