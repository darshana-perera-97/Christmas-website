import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import PostDesigner from "./Pages/PostDesigner";
import ContctForm from "./Pages/ContctForm";
import ThankYouPage from "./Pages/Thankyou";
import PostCreator from "./Components/PostCreator";
import PostCreator2 from "./Components/PostCreator2.js";
import PostCreator3 from "./Components/PostCreator3.js";
import PostCreator4 from "./Components/PostCreator4.js";

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
        <Route path="/post1" element={<PostCreator />} />
        <Route path="/post2" element={<PostCreator2 />} />
        <Route path="/post3" element={<PostCreator3 />} />
        <Route path="/post4" element={<PostCreator4 />} />
      </Routes>
    </div>
  );
};

export default App;
