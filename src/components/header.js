import React from "react";

function Header({ name, title }) {
  return (
    <div style={{ background: "yellow", padding: 5, width: 800 }}>
      <h1>static data</h1>
      <h2>
        dynamic data using props - My name is {name} and card is {title}
      </h2>
    </div>
  );
}

export default Header;

// while applying some css to div tag style = {{ }} ...so this is JS object inside html bracket
