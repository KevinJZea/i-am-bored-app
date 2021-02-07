import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const updateRecommendations = (payload) => {
    setState({
      ...state,
      recommendations: [payload],
    });
  };

  return {
    updateRecommendations,
    state,
  };
};

export default useInitialState;
