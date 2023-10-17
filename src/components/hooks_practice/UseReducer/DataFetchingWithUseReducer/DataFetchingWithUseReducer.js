import React, { useEffect, useReducer } from "react";
import axios from "axios";
const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      state = {
        loading: false,
        error: "",
        post: action.payload,
      };
      return state;

    case "FETCH_ERROR":
      state = {
        loading: false,
        error: `something went wrong`,
        post: {},
      };
      return state;

    default:
      return state;
  }
  return state;
};

const DataFetchingWithUseReducer = () => {
  const [currentState, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      <h2> Using useReducer - state as an object</h2>
      {currentState.loading ? currentState.loading : currentState.post.title}
      {currentState.error ? currentState.error : null}
    </div>
  );
};

export default DataFetchingWithUseReducer;
