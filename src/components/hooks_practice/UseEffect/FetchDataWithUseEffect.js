import React, { useState, useEffect } from "react";
import axios from "axios";
const FetchDataWithUseEffect = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(`error in data fetching : ${error}`);
      });
  }, []);
  return (
    <div style={{ background: "lightgreen" }}>
      <h2>
        Example of dummy data fetching from online JSON resouces available
      </h2>
      <p>Listing all posts data</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataWithUseEffect;
