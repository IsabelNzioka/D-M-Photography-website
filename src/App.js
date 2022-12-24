import React from "react";
import { Routes, Route } from "react-router";

import Layout from "./containers/Layout/Layout";
import Projects from "./components/Projects/Projects";
import Weddings from "./components/Weddings/Weddings";

import "./App.css";

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/wedding" element={<Weddings />} />
    </Routes>
  );
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
