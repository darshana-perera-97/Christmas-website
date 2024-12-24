import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import PostDesigner from "./Pages/PostDesigner";
import ContctForm from "./Pages/ContctForm";
import ThankYouPage from "./Pages/Thankyou";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/postAll" element={<PostDesigner />} />
        <Route path="/form" element={<ContctForm />} />
        <Route path="/thank" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
};

export default App;
