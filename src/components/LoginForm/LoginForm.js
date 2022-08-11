import React, { useState } from "react";
import "./loginForm.css";

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div className="flexContainer mt-5">
      <form onSubmit={submitHandler}>
        <div className="form-outline mb-4 text-center">LOG IN</div>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-outline mb-4">
          <input
            type="email"
            id="email"
            className="form-control mb-2"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
          <label className="form-label" htmlFor="email">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="password"
            className="form-control mb-2"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          <label className="form-label" htmlFor="password">
            Password
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
