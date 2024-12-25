import React from "react";
import { Link } from "react-router-dom";
import UnderConstruction from "../Components/UnderConstruction";
import PostCreator from "../Components/PostCreator";
import CopyrightBar from "../Components/CopyrightBar";

export default function PostDesigner() {
  return (
    <div>
      {/* <UnderConstruction /> */}
      <PostCreator />
      <div className="d-flex justify-content-center mt-5 ">
        <Link to="/" className="btn btn-primary custom-btn ">
          Back to Home Page
        </Link>
      </div>
    </div>
  );
}
