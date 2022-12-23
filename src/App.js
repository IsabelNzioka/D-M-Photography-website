import React from "react";

import Layout from "./containers/Layout/Layout";
import Projects from "./components/Projects/Projects";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Projects />
      </Layout>
    </div>
  );
}

export default App;
