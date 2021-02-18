import { useState, useEffect } from "react";

const useRecommendations = (url) => {
  const [recommendation, setRecommendation] = useState([]);

  const getData = (dataURL) => {
    fetch(dataURL)
      .then((response) => response.json())
      .then((data) => setRecommendation(data));
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  console.log(recommendation, "Hello");

  return [recommendation, getData];
};

export default useRecommendations;
