import React, { useState } from "react";

function FormDisplay() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Showing user details below");
    console.log("username  :" + formData.username);
    console.log("password  :" + formData.password);
  };
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-4 my-3">
        Fill User details
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="flex max-w-xl mx-auto p-6 rounded-md shadow-md bg-sky-200 "
      >
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={(event) => {
            setFormData({ ...formData, username: event.target.value });
          }}
          className="border rounded-md px-3 py-2 w-full mt-8"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={(event) => {
            setFormData({ ...formData, password: event.target.value });
          }}
          className="border rounded-md px-3 ms-2 py-2 w-full mt-8 "
        />
        <button
          type="submit"
          className="p-4 mx-auto mt-8 ms-5  bg-green-500 w-full rounded-lg"
        >
          Show user details on console
        </button>
      </form>
    </div>
  );
}

export default FormDisplay;
