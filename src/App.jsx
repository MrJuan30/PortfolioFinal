import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "boxicons";
import Navbar from "./Components/NavBar/Navbar";
import AboutMe from "./Components/AboutMe/AboutMe";
import Works from "./Components/Experience/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutMe />} />
        <Route path="/Works" element={<Works />} />
      </Routes>
    </div>
  );
}

export default App;
