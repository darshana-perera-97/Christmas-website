import React from "react";
import tree01 from "../Assets/tree01.png";

const Calneder = () => {
  return (
    <div className="calneder-banner">
      <div className="container py-5 my-5">
        <div className="row align-items-center ">
          {/* Text and Form Section */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="txt1">Download</h1>
            <h1 className="mb-3 txt2">2025 Calender</h1>
            <h2 className="mb-3">As a soft-copy</h2>

            {/* Button Section */}
            <button className="btn btn-primary custom-btn2">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calneder;
