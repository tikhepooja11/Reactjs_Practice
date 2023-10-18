import React, { useState } from "react";
import { Form, Input, FormGroup, Container } from "reactstrap";
const useStateObject = () => {
  const [student, setStudent] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleFormInput = (event) => {
    const inputFieldName = event.target.name;
    const inputFieldValue = event.target.value;
    setStudent((prev) => {
      return { ...prev, [inputFieldName]: inputFieldValue };
    });
  };

  return (
    <div style={{ background: "orange" }}>
      <h2> Example of useState with objects</h2>
      <Form>
        <FormGroup>
          <Input
            type="text"
            name="username"
            placeholder="Enter name here"
            value={student.username}
            onChange={handleFormInput} // or  onChange = {e=>setName({...student, username:e.target.value})}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            placeholder="Enter email here"
            value={student.email}
            onChange={handleFormInput}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            placeholder="Enter password here"
            value={student.password}
            onChange={handleFormInput}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="confirm_password"
            placeholder="Confirm your password"
            value={student.confirm_password}
            onChange={handleFormInput}
          ></Input>
        </FormGroup>
        <Container>
          <button>Create Account</button>
        </Container>
      </Form>

      <h2>{`My name is ${student.username} & email is ${student.email}`}</h2>
    </div>
  );
};

export default useStateObject;
