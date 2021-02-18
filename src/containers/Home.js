import React from "react";

// import MainButton from "../components/MainButton";
import LightMainButton from "../components/LightMainButton";
import RecommendationList from "../components/RecommendationList";

import "../styles/Home.css";

// Inspired in https://www.boredapi.com/

const Home = () => {
  return (
    <React.Fragment>
      <section className="Home">
        {/* <MainButton /> */}
        <LightMainButton />
        <RecommendationList />
      </section>
    </React.Fragment>
  );
};

export default Home;
