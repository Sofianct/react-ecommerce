import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";

const Dashboard = () => {
  const userData = {
    email: "email@email.com",
    password: "123",
  };

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.email === userData.email &&
      details.password === userData.password
    ) {
      setUser({
        email: details.email,
      });
    } else if (details.email === "" && details.password === "") {
      setError("Please write your email and password");
    } else {
      setError("Wrong email or password");
    }
  };

  const Logout = () => {
    setUser({ email: "" });
  };
  return (
    <>
      {user.email !== "" ? (
        <div>
          <h2>
            Welcome, <span>{user.email}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </>
  );
};

export default Dashboard;
