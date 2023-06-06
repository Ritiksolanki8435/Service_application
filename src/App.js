import React from "react";
import "./App.css";
import GetData from "./components/GetData";
import Signup from "./components/Signup";
import Cards from "./components/Cards";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
