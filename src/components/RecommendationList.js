import React, { useContext } from "react";
import AppContext from "../context/AppContext";

import Recommendation from "./Recommendation";

import "../styles/RecommendationList.css";
// import { act } from "react-dom/test-utils";

const RecommendationList = () => {
  const { state } = useContext(AppContext);
  const { recommendations } = state;

  return (
    <React.Fragment>
      <section className="RecommendationList">
        {recommendations.map(
          ({ activity, type, participants, price, accessibility, key }) => (
            <Recommendation
              key={key}
              activity={activity}
              type={type}
              participants={participants}
              price={price}
              accessibility={accessibility}
            />
          )
        )}
      </section>
    </React.Fragment>
  );
};

export default RecommendationList;
