import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div
      className="w3-content w3-margin-top"
      style={{ maxWidth: 1400 }}
      id="resume"
    >
      {/* <!-- The Grid --> */}
      <div className="w3-row-padding">
        {/* <!-- Left Column --> */}
        <div className="w3-third">
          <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container">
              <img
                src="https://picsum.photos/445/296"
                alt="Avatar"
                id="avatar"
              />
              <div className="w3-display-bottomleft w3-container w3-text-black">
                <h2>Bob Church</h2>
              </div>
            </div>
            <div className="w3-container">
              <p>
                <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-theme" />
                Web Developer
              </p>
              <p>
                <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-theme" />
                Phoenix, AZ
              </p>
              <Link to="/contact" className="w3-hover-theme">
                <i className="fa fa-address-card fa-fw w3-margin-right w3-text-theme" />
                Contact
              </Link>
              <hr />

              <p className="w3-large">
                <b>
                  <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-theme" />
                  Skills
                </b>
              </p>
              <p>HTML</p>

              <p>CSS</p>

              <p>JavaScript</p>

              <p>React</p>

              <p>Node.js</p>

              <p>SQL database</p>

              <p>Mongo database</p>

              <br />
            </div>
          </div>
          <br />

          {/* <!-- End Left Column --> */}
        </div>

        {/* <!-- Right Column --> */}
        <div className="w3-twothird">
          <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-theme" />
              Work Experience
            </h2>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Front End Developer / w3schools.com</b>
              </h5>
              <h6 className="w3-text-theme">
                <i className="fa fa-calendar fa-fw w3-margin-right" />
                September 2015 - August 2018
                {/* <span className="w3-tag w3-theme w3-round">Current</span> */}
              </h6>
              <ul>
                <li>
                  Manage project resources: ensure timely project delivery with
                  planned capacity; review skills requirements for current and
                  future projects; assist in developing internal talent to
                  improve in their current roles and progress toward future
                  aspirations. Act as a strong advocate for quality in the
                  product development process. Provide QA status and progress
                  reports during all project testing phases, including
                  summarizing QA results at project conclusion for future
                  development of processes and talent.{" "}
                  <ul>
                    <li>
                      Design test strategies using a variety of techniques,
                      tools, and technologies including selection of the
                      appropriate methods including cost, efficiency,
                      effectiveness, and balancing available resources.{" "}
                    </li>
                    <li>
                      Create productive working relationships with other
                      managers to ensure goal alignment and represent the QA
                      team’s contributions.{" "}
                    </li>
                    <li>
                      Implement improvements to optimize and evolve
                      department-wide processes.
                    </li>
                    <li>
                      Interview, test, hire and assist with training full-time
                      and temporary employees for process continuity, team
                      compatibility, and future growth and development of
                      employees.
                    </li>
                  </ul>
                </li>
              </ul>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Web Developer / something.com</b>
              </h5>
              <h6 className="w3-text-theme">
                <i className="fa fa-calendar fa-fw w3-margin-right" />
                Mar 2012 - Dec 2014
              </h6>
              <p>
                Consectetur adipisicing elit. Praesentium magnam consectetur vel
                in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora
                soluta ea et odio, unde doloremque repellendus iure, iste.
              </p>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Graphic Designer / designsomething.com</b>
              </h5>
              <h6 className="w3-text-theme">
                <i className="fa fa-calendar fa-fw w3-margin-right" />
                Jun 2010 - Mar 2012
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              <br />
            </div>
          </div>

          <div className="w3-container w3-card w3-white">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-theme" />
              Education
            </h2>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>University of Arizona</b>
              </h5>
              <h6 className="w3-text-theme">
                <i className="fa fa-calendar fa-fw w3-margin-right" />
                January 2019 - April 2019
              </h6>
              <p>Continuing Education certificate Full Stack Web Development</p>
              <hr />
            </div>
          </div>

          {/* <!-- End Right Column --> */}
        </div>

        {/* <!-- End Grid --> */}
      </div>

      {/* <!-- End Page Container --> */}
    </div>
  );
}

export default About;
