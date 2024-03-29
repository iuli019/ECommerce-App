import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import http from "../services/httpService";

function Login() {
  const [user, setUser] = useState();

  const handleClick = async () => {
    http.loginUser("http://localhost:5000/auth", user);
  };

  const handleRegister = () => {
    window.location = "/register";
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-5"> Login</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>

        <Button variant="outline-dark mr-2" onClick={handleClick}>
          Login
        </Button>
        <Button variant="outline-dark" onClick={handleRegister}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Login;
