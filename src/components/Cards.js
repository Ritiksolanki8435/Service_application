import React from "react";
import "./home.css";
const Cards = () => {
  return (
    <div className="Root">
      <div className="heading_container">
        <h1 className="heading">
          Welcome To the <span className="spn">Servify</span>
        </h1>
        <p>What Are you Looking For ??</p>
      </div>
      <div className="btncontainer">
      <button className="btns">Service Provider</button>
      <button className="btns">Service Consumer</button>
      </div>
    </div>
  );
};

export default Cards;
