import React, { useState } from "react";

export const ContextDrawer = React.createContext({});

const DrawerContext = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ContextDrawer.Provider value={{ open, setOpen }}>
        {children}
      </ContextDrawer.Provider>
    </>
  );
};

export default DrawerContext;
