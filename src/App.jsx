import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "boxicons";
import Navbar from "./Components/NavBar/Navbar";
import AboutMe from "./Components/AboutMe/AboutMe";
import Works from "./Components/Experience/Works";
import { useLocation } from "react-router-dom";

function App() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
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
