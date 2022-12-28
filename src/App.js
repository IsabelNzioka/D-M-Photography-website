import React from "react";
import { Routes, Route } from "react-router";

import Layout from "./containers/Layout/Layout";
import Projects from "./components/Projects/Projects";
import Weddings from "./components/Weddings/Weddings";
import About from "./components/About/About";
// import SliderTestimonials from "./containers/Slider/SliderTestimonials/SliderTestimonials";
import Contact from "./components/Contact/Contact";

import "./App.css";

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/wedding" element={<Weddings />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
