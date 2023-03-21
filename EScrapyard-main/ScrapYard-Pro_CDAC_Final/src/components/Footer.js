import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/" className="nav-link d-inline"> <InstagramIcon /></a> <a href="https://twitter.com/" className="nav-link d-inline"><TwitterIcon /></a> <a href="https://www.facebook.com/" className="nav-link d-inline"><FacebookIcon /></a> <a href="https://www.linkedin.com/" className="nav-link d-inline"><LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 e-ScrapYard.com</p>
     
    </div>
  );
}

export default Footer;
