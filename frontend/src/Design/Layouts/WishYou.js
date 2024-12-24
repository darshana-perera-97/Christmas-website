import React, { useState } from "react";
import tree01 from "../Assets/tree01.png";

const WishYou = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://69.197.187.24:5000/api/submit-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Data submitted successfully!");
        setFormData({ firstName: "", lastName: "", email: "" });
      } else {
        alert("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="wish-banner">
      <div className="container py-5 my-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start wish2">
            <h1 className="txt1">Get a</h1>
            <h1 className="mb-3 txt2">Christmas Wish</h1>
            <h2 className="mb-3">Submit Your Data to Receive Wish</h2>

            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary custom-btn">
                Get Now
              </button>
            </form>
          </div>
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={tree01} alt="Banner" className="img-fluid tree01" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishYou;
