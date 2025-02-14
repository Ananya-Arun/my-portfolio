import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

function App() {
  return (
    // Set the basename for routing when deployed on GitHub Pages (subdirectory path)
    <Router basename="/my-portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home is the default route */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
