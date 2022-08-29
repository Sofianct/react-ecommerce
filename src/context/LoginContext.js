import React, { useState } from "react";

export const LoginContext = React.createContext({});

const Logincontext = ({ children }) => {
  const [logged, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ logged, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

export default Logincontext;
