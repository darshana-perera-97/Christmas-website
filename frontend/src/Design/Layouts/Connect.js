import React from "react";
import tree02 from "../Assets/tree02.jpg";

const Connect = () => {
  return (
    <div className="getConnected">
      <div className="container py-5 my-5">
        <div className="row align-items-center ">
          {/* Text and Button Section */}
          <div className="col-md-6 text-center text-md-start wish">
            <h1 className="txt1">Be Updated</h1>
            <h1 className="mb-3 txt2">With Latest Updated</h1>
            <h2 className="mb-3">From Us</h2>
            <button className="btn btn-primary custom-btn3">Connect Now</button>
          </div>
          {/* Image Section */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={tree02} alt="Banner" className="img-fluid tree2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
