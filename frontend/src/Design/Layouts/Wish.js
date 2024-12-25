import React from "react";
import { Link, Outlet } from "react-router-dom";
import santa from "../Assets/santa.png";

const MainBanner = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center ">
        {/* Image Section */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src={santa} alt="Banner" className="img-fluid santa" />
        </div>
        {/* Text and Button Section */}
        <div className="col-md-6 text-center text-md-start wish">
          <h1 className="txt1">Create a</h1>
          <h1 className="mb-3 txt2">Christmass Wishes</h1>
          <h2 className="mb-3">With Your Own Design</h2>
          <Link to="/postAll" className="btn btn-primary custom-btn">
            Try Now
          </Link>
          {/* <button className="btn btn-primary custom-btn">Try Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
