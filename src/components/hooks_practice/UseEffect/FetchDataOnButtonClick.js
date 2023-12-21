import React, { useState, useEffect } from "react";
import axios from "axios";
const FetchDataOnButtonClick = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(`error in data fetching : ${error}`);
      });
  }, [idFromButtonClick]); //  re-render the page based on fetch post button click instead just taking id value from input field

  const handleButtonClick = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div style={{ background: "lightgreen" }}>
      <h2>Example of single post data</h2>
      <p>Listing single posts data based on provided id & on button click</p>
      <label htmlFor="postId">Enter postId here :</label>
      <input
        type="text"
        name="postId"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button className=" ms-2 m-3 p-2 bg-red-500" onClick={handleButtonClick}>
        Fetch Post
      </button>
      <h2>{post.title}</h2>
    </div>
  );
};

export default FetchDataOnButtonClick;
