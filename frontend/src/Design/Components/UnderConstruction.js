import React from "react";
import { Link } from "react-router-dom";
import underConstruction from "../Assets/underConstruction.jpg";

const UnderConstruction = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <img
          src={underConstruction}
          alt="Under Construction"
          className="img-fluid mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="display-4">Page Under Construction</h1>
        <p className="lead">
          We’re working hard to bring you something amazing. Stay tuned!
        </p>
        <Link to="/" className="btn btn-primary custom-btn">
          Back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;
