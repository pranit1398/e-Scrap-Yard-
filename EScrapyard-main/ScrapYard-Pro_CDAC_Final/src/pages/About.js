import React from "react";
import { Container } from "reactstrap";
import MultiplePizzas from "../assets/about.jpg";
import "../styles/About.css";
import Contact from "./Contact";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <Container>
        <h1> ABOUT US</h1>
        <p>
          Hello everyone, This is an online B2B marketplace connecting buyers
          with suppliers. The channel focuses on providing a platform to Small &
          Medium Enterprises (SMEs), Large Enterprises as well as individuals.
          The project's mission is ‘to make doing business easy’.
        </p>
        <div>
          <h3>e-ScrapYard for Buyers </h3>
          – Convenience of connecting with sellers anytime, anywhere
          <br></br>– Wider marketplace with a range of products and suppliers
          <br></br>– Payment Protection Program
        </div>
        <div>
          <h3>e-ScrapYard for Suppliers</h3>
          – Enhanced business visibility
          <br></br>– Increased credibility for your brand
          <br></br>– Lead Management System
          </div>
          <br/><br/>
          {/* <div><Contact/></div> */}
          
          </Container>
          
      </div>
    </div>
  );
}

export default About;