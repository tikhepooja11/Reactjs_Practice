import React, { useState, useEffect } from "react";
import axios from "axios";
const FetchDataSinglePost = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(`error in data fetching : ${error}`);
      });
  }, [id]); //  passing id here as i want to re-render page to new post title based on different ids passed
  return (
    <div style={{ background: "lightgreen" }}>
      <h2>Example of single post data</h2>
      <p>Listing single posts data based on provided id</p>
      <input
        type="text"
        value={id}
        placeholder="Enter post id here"
        onChange={(e) => setId(e.target.value)}
      ></input>
      <h2>{post.title}</h2>
    </div>
  );
};

export default FetchDataSinglePost;
