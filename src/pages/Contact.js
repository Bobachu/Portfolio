import React from "react";
import { Link } from "react-router-dom";
// import Learn from "./Learn";

function Contact(props) {
  return (
    <div id="homePage" style={{ maxWidth: 1400 }}>
      <div
        className="w3-content w3-text-grey w3-container"
        id="about"
      >
        <div className="w3-row-padding">
          {/* <!-- Left Column --> */}
          <div className="w3-third w3-animate-zoom">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img
                  src="/images/payphone.jpg"
                  alt="Avatar"
                  id="avatar"
                />
                {/* <div className="w3-display-bottomleft w3-container w3-text-black">
                  <h2>Jane Doe</h2>
                </div> */}
              </div>
            </div>
            <br />

            {/* <!-- End Left Column --> */}
          </div>

          {/* <!-- Right Column --> */}
          <div className="w3-twothird w3-animate-zoom">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16 w3-center">
                <i className="fa fa-address-card fa-fw w3-margin-right w3-xxlarge w3-text-theme" />
                Contact Me
              </h2>
              <div className="contact-form w3-center w3-text-grey">
                <h2>Email: bob.church@gmail.com</h2>
                <h2>Phone: (928) 651-1487</h2>
                <h2>
                  <Link to="/files/Robert Church Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</Link>
                </h2>
                <h2>
                  <a
                    href="https://www.linkedin.com/in/bob-church-42a0765/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </h2>
                <h2>
                  <a
                    href="https://github.com/Bobachu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </h2>
              </div>
            </div>

            {/* <!-- End Right Column --> */}
          </div>
        </div>
      </div>
    </div>

    // <div className="contact-form w3-center">
    //     <h1 className="contact-title">Contact</h1>
    //     <h2>Email: bob.church@gmail.com</h2>
    //     <h2>Phone: (928) 651-1487</h2>
    //     <h2><a href="assets/Robert Church Resume.pdf">Resume</a></h2>
    //     <h2><a href="https://www.linkedin.com/in/bob-church-42a0765/">LinkedIn</a></h2>
    //     <h2><a href="https://github.com/Bobachu">Github</a></h2>
    // </div>
  );
}

export default Contact;
