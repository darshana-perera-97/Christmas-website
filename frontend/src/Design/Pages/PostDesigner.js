import React from "react";
import { Link } from "react-router-dom";
import preview01 from "../Assets/preview01.jpg";
import preview02 from "../Assets/preview02.jpg";
import preview03 from "../Assets/preview03.jpg";
import preview04 from "../Assets/preview04.jpg";
import PostCreator from "../Components/PostCreator";
import CopyrightBar from "../Components/CopyrightBar";

// Card Component
function Card({ image, title, link, buttonText }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card text-center p-3 shadow rounded">
        <div className="position-relative">
          <img src={image} alt={title} className="card-img-top img-fluid" />
          {/* <div className="card-img-overlay d-flex align-items-center justify-content-center">
            <h5 className="text-white bg-dark p-2 rounded">{title}</h5>
          </div> */}
        </div>
        <div className="card-body">
          <Link to={link} className="btn btn-primary custom-btn2 mt-2">
            Use This Template
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PostDesigner() {
  return (
    <div className="container mt-5">
      <div className="row">
        <Card
          image={preview01}
          title="Card 1"
          link="/post1"
          buttonText="Go to Link 1"
        />
        <Card
          image={preview02}
          title="Card 1"
          link="/post2"
          buttonText="Go to Link 1"
        />
        <Card
          image={preview04}
          title="Card 1"
          link="/post4"
          buttonText="Go to Link 1"
        />
        <Card
          image={preview03}
          title="Card 1"
          link="/post3"
          buttonText="Go to Link 1"
        />
        {/* <Card
          image="https://via.placeholder.com/150"
          title="Card 2"
          link="/link2"
          buttonText="Go to Link 2"
        />
        <Card
          image="https://via.placeholder.com/150"
          title="Card 3"
          link="/link3"
          buttonText="Go to Link 3"
        />
        <Card
          image="https://via.placeholder.com/150"
          title="Card 4"
          link="/link4"
          buttonText="Go to Link 4"
        /> */}
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Link to="/" className="btn btn-primary custom-btn">
          Back to Home Page
        </Link>
      </div>
    </div>
  );
}
