import React from "react";
import "../../pages/style.css";

function Footer() {
  return (
    <footer className="w3-center w3-black w3-padding w3-bottom w3-theme-d4">
      <p>Copyright &copy; 2019</p>
      <a
        href="https://github.com/Bobachu"
        target="_blank"
        className="w3-hover-theme w3-padding"
        rel="noopener noreferrer"
        id="gitlink"
      >
        {" "}
        GitHub
      </a>
    </footer>
  );
}

export default Footer;
