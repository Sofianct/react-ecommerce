import React, { useState } from "react";

export const LoginContext = React.createContext({});

const LoginContext = ({ children }) => {
  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");
  return (
    <LoginContext.Provider value={{ user, setUser, error, setError }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
