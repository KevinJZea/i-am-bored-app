import { useState, useEffect } from "react";

const useRecommendations = (url) => {
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRecommendation(data));
  }, [url]);

  console.log(recommendation, "Hello");
  return recommendation;
};

export default useRecommendations;
