import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  console.log("contact");
  return (
    <div>
      <h1> Contact page </h1>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default Contact;
