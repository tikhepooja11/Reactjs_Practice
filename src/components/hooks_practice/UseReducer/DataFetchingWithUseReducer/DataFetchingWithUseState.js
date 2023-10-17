import React, { useEffect, useState } from "react";
import axios from "axios";
const DataFetchingWithUseState = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost("");
        setError(`something went wrong : ${error}`);
      });
  }, []);
  return (
    <div>
      <h2>Using useState - state as single variable </h2>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </div>
  );
};

export default DataFetchingWithUseState;
