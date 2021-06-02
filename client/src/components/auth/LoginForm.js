import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layouts/AlertMessage";

const LoginForm = () => {
  // Context
  const { loginUser } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  // Router
  // const history = useHistory();

  // Local State
  const { username, password } = loginForm;
  const [alert, setAlert] = useState(null);

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();
    try {
      const loginData = await loginUser(loginForm);
      if (loginData.success) {
        // history.push("/dashboard");
      } else {
        setAlert({ type: "danger", message: loginData.message });
        setTimeout(() => setAlert(null), 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form className="my-4" onSubmit={login}>
        <AlertMessage info={alert} />
        <Form.Group>
          <Form.Label className="login-label d-flex justify-content-start">
           Username
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeLoginForm}
          ></Form.Control>
          <Form.Text className="text-muted d-flex justify-content-start">
            We'll never share your account with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label className="login-label d-flex justify-content-start">
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onChangeLoginForm}
          ></Form.Control>
        </Form.Group>
        <Button className="btn-login" variant="primary" size="lg" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
