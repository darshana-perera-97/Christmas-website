import React from "react";
import tree01 from "../Assets/tree01.png";

const WishYou = () => {
  return (
    <div className="wish-banner">
      <div className="container py-5 my-5">
        <div className="row align-items-center ">
          {/* Text and Form Section */}
          <div className="col-md-6 text-center text-md-start wish2">
            <h1 className="txt1">Get a</h1>
            <h1 className="mb-3 txt2">Christmas Wish</h1>
            <h2 className="mb-3">Submit Your Data to Receive Wish</h2>

            {/* Form Section */}
            <form className="mb-4">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
            </form>

            {/* Button Section */}
            <button className="btn btn-primary custom-btn">Get Now</button>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={tree01} alt="Banner" className="img-fluid tree01" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishYou;
