import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <footer className="footer">
        <div className="text-center text-lg-start p-5 mt-5 ">
          @Made with{" "}
          <span role="img" aria-label="heart">
            💖
          </span>{" "}
          by
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Sofianct/"
          >
            &nbsp; Sofía
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
