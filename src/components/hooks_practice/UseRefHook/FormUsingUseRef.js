import React, { useRef } from 'react';

function StudentForm() {
  // Create refs for each form field
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const ageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Accessing form values using refs
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const age = ageRef.current.value;

    // Do something with the form values (e.g., send to a server)
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Age:', age);

    // Reset form fields
    usernameRef.current.value = '';
    passwordRef.current.value = '';
    ageRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" ref={usernameRef} />
      </label>
      <br />

      <label>
        Password:
        <input type="password" ref={passwordRef} />
      </label>
      <br />

      <label>
        Age:
        <input type="number" ref={ageRef} />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
