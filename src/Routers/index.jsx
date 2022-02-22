import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Activity from "../Pages/Activity";
import Footer from "../Components/Footer";

const Routers = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/activity" exact element={<Activity />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Routers;