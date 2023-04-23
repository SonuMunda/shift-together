import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <section className="error-page">
      <div className="container">
        <div className="error-status">
          <h1>404</h1>
        </div>
        <div className="error-msg">
          <h4 className="text-uppercase">Opps! Page not found</h4>
        </div>
        <div className="error-text">
          <p>Sorry the page you're looking for doesn't exist.</p>
        </div>
        <div className="error-link my-4">
          <Link to="/">Go back to home</Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
