import React from "react";
import mainAssetsCenter from "../Assets/mainAssetsCenter.png";
import mainText from "../Assets/mainText.png";

const MainBanner = () => {
  return (
    <div className="main-banner">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 text-center">
          <img
            src={mainText}
            alt="Second Banner mainText"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-6 text-center">
          <img
            src={mainAssetsCenter}
            alt="First Banner"
            className="img-fluid mainAssetsCenter"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
