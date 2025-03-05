import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oops! Page not found.</p>
      <a href="/" className="back-home">
        Go Back to Home
      </a>
    </div>
  );
};

export default NotFound;
