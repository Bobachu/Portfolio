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
        <div className="w3-third w3-animate-left">
          <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container">
              <img src="/images/me.jpg" alt="Avatar" id="avatar" />
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
        <div className="w3-twothird w3-animate-right">
          <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-theme" />
              Work Experience
            </h2>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Front End Developer</b>
              </h5>
              <h6 className="w3-text-theme">
                <i className="fa fa-calendar fa-fw w3-margin-right" />
                July 2019 - Current
                {/* <span className="w3-tag w3-theme w3-round">Current</span> */}
              </h6>
              <ul>
                <li>
                  Working as a front-end developer using Angular, involved with
                  upgrading the existing code from AngularJS to Angular 7 then
                  moving into Drupal development responsible for updating and
                  maintaining the Drupal code for the company’s page, as well as
                  updating and creating ptypes to allow content creators to use
                  the latest Angular components.{" "}
                  <ul>
                    <li>
                      Upgrading website components from AngularJS to Angular 7.{" "}
                    </li>
                    <li>
                      Writing and fixing unit tests for both AngularJS and
                      Angular 7.{" "}
                    </li>
                    <li>
                      Debugging and fixing defects found in TrackJS and Splunk
                      errors from the live site.
                    </li>
                    <li>Updating and maintaining the Drupal based CMS.</li>
                    <li>
                      Part of the on call team for live issues coming from
                      tracking and error reporting systems.
                    </li>
                  </ul>
                </li>
              </ul>
              {/* <hr /> */}
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Lead of Product QA [Manager] / Flaregames</b>
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
              {/* <hr /> */}
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>QA Test Lead / Flaregames</b>
              </h5>
              <ul>
                <li>
                  Tasked with being the Publishing QA Lead for a project from a
                  third-party developer starting during soft launch and going to
                  the project’s sunset.{" "}
                  <ul>
                    <li>
                      Created test plans for feature testing to assist the
                      developer leading up to submissions.{" "}
                    </li>
                    <li>
                      Ensured submission testing was complete by the agreed upon
                      release date.
                    </li>
                    <li>
                      Maintained test plans and tested updates to the game
                      throughout the lifecycle.
                    </li>
                    <li>
                      Coordinated with an internal game team and the external
                      developer for project continuity.
                    </li>
                    <li>Managed outsource teams as needed for testing.</li>
                    <li>Deployed test servers using AWS.</li>
                  </ul>
                </li>
              </ul>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>QA Test Lead / WildTangent Studio</b>
              </h5>
              <h6 className="w3-text-theme">
                <i className="fa fa-calendar fa-fw w3-margin-right" />
                September 2012 - August 2015
              </h6>
              <ul>
                <li>
                  Tasked with starting the QA team for the new mobile games
                  studio formed by WildTangent, responsible for testing of all
                  games made internally as well as games created by outsource
                  partners for Android and iOS. Also responsible for
                  interviewing and hiring additional QA staff as needed,
                  including hiring contract workers for holiday work load
                  increases.{" "}
                  <ul>
                    <li>
                      Lead testing on all studio titles, both internally created
                      as well as outsourced.{" "}
                    </li>
                    <li>
                      Ensured all titles are tested and released on schedule.{" "}
                    </li>
                    <li>
                      Tested updates for existing titles until project sunset.{" "}
                    </li>
                    <li>
                      Coordinated with producers, developers, and art teams to
                      remain up to date on fast changing requirements.{" "}
                    </li>
                    <li>
                      Created and maintained in internal beta process to use the
                      larger main office for game feedback before release.{" "}
                    </li>
                  </ul>
                </li>
              </ul>
              <br />
            </div>
            <hr />
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>QA Test Lead in Social / PopCap Games</b>
              </h5>
              <h6 className="w3-text-theme">
                <i className="fa fa-calendar fa-fw w3-margin-right" />
                August 2007 - August 2012
              </h6>
              <ul>
                <li>
                  Responsible for managing testing on a Facebook connected
                  Bejeweled Blitz iOS project as well as directing and training
                  other testers on the project; work and maintain a live product
                  with regular client and server updates. Responsible for
                  coordinating with other platforms on the project with shared
                  server infrastructure before and during server and client
                  updates.
                  <ul>
                    <li>
                      Lead testing on iOS client updates while maintaining the
                      current live product.
                    </li>
                    <li>
                      Coordinated with the customer service department after
                      product release in identifying and resolving reported end
                      user issues.
                    </li>
                    <li>
                      Worked with developers and producers to triage and fix
                      bugs and design new features.
                    </li>
                    <li>
                      Trained new testers to assist with client and server push
                      testing.
                    </li>
                    <li>
                      Created and maintained test and training documentation.
                    </li>
                  </ul>
                </li>
              </ul>
              <br />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>QA Lead in Studio / PopCap Games</b>
              </h5>
              <ul>
                <li>
                  Full-time employee in the studio QA department where I was
                  responsible for ensuring that projects that were assigned to
                  me were fully tested and ready for release. I was also in
                  charge of preparing test plans for assigned projects as well
                  as giving final QA sign off when the project was completed.
                  <ul>
                    <li>
                      Lead other testers on multiple projects to ensure the best
                      quality and a timely product release.
                    </li>
                    <li>
                      Maintained open communication with the producers,
                      developers and artists for triaging of bugs and project
                      planning.
                    </li>
                  </ul>
                </li>
              </ul>{" "}
              <br />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>QA Tester and Lead in Mobile / PopCap Games</b>
              </h5>
              <ul>
                <li>
                  Full-Time employee in the mobile QA department where I began
                  as a QA tester testing the porting of games into BREW and Java
                  for mobile devices for US specific carriers. I was then made a
                  Lead responsible for ensuring that porting to US BREW devices
                  (including Verizon and Alltel phones) as well as porting to US
                  Java devices for AT&T were thoroughly tested.
                  <ul>
                    <li>
                      Responsible for guaranteeing that builds for BREW devices
                      passed the TruBREW certification tests for release.
                    </li>
                    <li>
                      Coordinated with test teams in Dublin, Ireland to promptly
                      and efficiently complete porting and backfill projects.
                    </li>
                    <li>Maintained robust device inventories.</li>
                  </ul>
                </li>
              </ul>{" "}
              <br />
            </div>
            <hr />
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
