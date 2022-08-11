import React, { useContext } from "react";
import { Logincontext } from "../../context/LoginContext";
import LoginForm from "../LoginForm/LoginForm";

const Dashboard = () => {
  const { Logout, user, error, Login } = useContext(Logincontext);
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
