import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../pages/style.css";

class NavTabs extends Component {
  burgerToggle = () => {
    let linksEl = document.querySelector(".burger");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  };

  render() {
    return (
      <div className="w3-top">
        <div className="w3-bar w3-padding w3-theme-d4" id="myNavbar">
          <Link to="/" className="w3-bar-item w3-button w3-hover-text-theme w3-mobile">
            HOME
          </Link>
          <Link
            to="/about"
            className="w3-bar-item w3-button w3-hover-text-theme w3-mobile"
          >
            <i className="fa fa-user" /> RESUME
          </Link>
          <Link
            to="/portfolio"
            className="w3-bar-item w3-button w3-hover-text-theme w3-mobile"
          >
            <i className="fa fa-th" /> PORTFOLIO
          </Link>
          <Link
            to="/contact"
            className="w3-bar-item w3-button w3-hover-text-theme w3-mobile"
          >
            <i className="fa fa-envelope" /> CONTACT
          </Link>
        </div>
      </div>
    );
  }
}

export default NavTabs;
