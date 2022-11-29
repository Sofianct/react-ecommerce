import React, { useContext, useState } from "react";
import "./loginForm.css";
import { Form } from "react-bootstrap";
import { Button } from "@nextui-org/react";
import Modal from "react-bootstrap/Modal";
import { LoginContext } from "../../context/LoginContext";

const LoginForm = (props) => {
  const { logged, setLoggedIn } = useContext(LoginContext);
  const [details, setDetails] = useState({ email: "", password: "" });
  const login = () => {
    if (props.loginVerification(details) === true) {
      setLoggedIn(true);
      props.onHide();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-50h"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label className="mb-2">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
              required
            />
            {/* <Form.Text className="text-muted">Message</Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label className="mb-2">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </Form.Group>

          <div className="btnGroup">
            <Button onClick={login} color="secondary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className="centerText">
        <p>Don't have an account?</p>
        <Button light color="secondary" auto>
          Sign up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginForm;
