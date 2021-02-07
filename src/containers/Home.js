import React from "react";

import MainButton from "../components/MainButton";
import RecommendationList from "../components/RecommendationList";

import "../styles/Home.css";

// Inspired in https://www.boredapi.com/

const Home = () => {
  return (
    <React.Fragment>
      <section className="Home">
        <MainButton />
        <RecommendationList />
      </section>
    </React.Fragment>
  );
};

export default Home;
