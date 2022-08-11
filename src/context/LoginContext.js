import React, { useState } from "react";

export const Logincontext = React.createContext({});

const LoginContext = ({ children }) => {
  // Try to find an alternative to this... use Fetch API
  const userData = {
    email: "email@email.com",
    password: "123",
  };

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState({});

  const Login = (details) => {
    if (
      details.email === userData.email &&
      details.password === userData.password
    ) {
      setUser({
        email: details.email,
      });
      setLoggedIn(true);
    } else if (details.email === "" || details.password === "") {
      setError("Please write your email and password");
      setLoggedIn(false);
    } else {
      setError("Wrong email or password");
      setLoggedIn(false);
    }
  };

  const Logout = () => {
    setUser({ email: "" });
    setLoggedIn(false);
  };

  return (
    <Logincontext.Provider
      value={{
        user,
        setUser,
        error,
        setError,
        Login,
        Logout,
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </Logincontext.Provider>
  );
};

export default LoginContext;
