import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "boxicons";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Home />} />
        <Route path="/Works" element={<Home />} />
        <Route path="/ContactMe" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
