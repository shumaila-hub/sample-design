import React from "react";
import Home from "./routes/home";
import Project from "./routes/project";
import Contact from "./routes/contact";
import About from "./routes/about";
import { Routes, Route} from "react-router-dom";
import Pricing from "./routes/pricing";
function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/project" element={<Project/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/pricing" element={<Pricing/>} />
    <Route path="/about" element={<About/>} />
  </Routes>
    
    </>
  );
}

export default App;
