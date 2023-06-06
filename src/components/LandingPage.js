import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const Navigate = useNavigate();
  return (
    <div className="App">
      <div className="landing-page">
        <div className="overlay">
          <h1 className="title">serviFY</h1>
          <p className="description">
            Connect with service providers and consumers.
          </p>
          <a className="cta-button"  onClick={() => Navigate("/Signup",)}>
            Get Started
          </a>
        </div>
      </div>
 
    </div>
  );
};

export default LandingPage;
