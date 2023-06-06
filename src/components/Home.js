import React from "react";
import { Container } from "react-bootstrap";
import Cards from "./Cards";
import "./home.css";

const Home = () => {
  return (
    <div className="main">
      <Container className="container">
        <Cards />
      </Container>
    </div>
  );
};

export default Home;
