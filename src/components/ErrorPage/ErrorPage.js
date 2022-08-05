import React from "react";
import "./errorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <img
        alt="404 NOT FOUND"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--ihHlMvsu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://media1.tenor.com/images/69526a37d84d274e6e01da07bf0ed0b5/tenor.gif"
      />
      <Link className="link" to="/">
        Go back to main page
      </Link>
    </div>
  );
};

export default ErrorPage;
