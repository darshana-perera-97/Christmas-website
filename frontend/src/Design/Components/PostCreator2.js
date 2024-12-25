import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import backImg from "../Assets/post2.jpg";

const PostCreator2 = () => {
  const postRef = useRef(null);
  const [text1, setText1] = React.useState("D&D Creations");
  const [text2, setText2] = React.useState("Web Design and Development");

  const saveAsJPG = () => {
    if (postRef.current) {
      html2canvas(postRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.download = "post.jpg";
        link.href = canvas.toDataURL("image/jpeg");
        link.click();
      });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 ">Post Creator</h1>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="text1" className="form-label">
                Enter Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="text1"
                value={text1}
                onChange={(e) => setText1(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="text2" className="form-label">
                Company or Position
              </label>
              <input
                type="text"
                className="form-control"
                id="text2"
                value={text2}
                onChange={(e) => setText2(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary mb-5 custom-btn"
              onClick={saveAsJPG}
            >
              Save as JPG
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <div
            ref={postRef}
            className="p-4 border text-center position-relative"
            style={{
              width: "500px",
              height: "500px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={backImg}
              alt="Background"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -1,
              }}
            />
            <h2
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "375px",
              }}
            >
              {text1}
            </h2>
            <p
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "-5px",
                fontSize: "14px",
                fontWeight: "200",
                opacity: "0.8",
              }}
            >
              {text2}
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 ">
        <Link to="/" className="btn btn-primary custom-btn ">
          Back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default PostCreator2;
