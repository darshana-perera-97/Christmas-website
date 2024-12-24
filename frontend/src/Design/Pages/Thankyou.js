import React from "react";
import { Link } from "react-router-dom";
import sant from "../Assets/santa.png";

const ThankYouPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center p-4 rounded bg-white">
        <img
          src={sant} // Replace with your actual asset path
          alt="Thank You"
          className="img-fluid mb-4"
          style={{ maxWidth: "280px" }}
        />
        <h2 className="text-primary">Thank You!</h2>
        <p className="text-muted">
          We truly appreciate your valuable contribution. Your support means a
          lot to us!
        </p>
        <Link to="/" className="btn btn-primary custom-btn">
          Back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
