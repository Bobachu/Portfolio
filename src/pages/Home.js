import React from "react";
import "./style.css";

function Home() {
  return (
    <div
      id="homePage"
      style={{ maxWidth: 1400 }}
      className="w3-content w3-text-grey w3-container"
      // id="about"
    >
      {/* <div
        className="w3-content w3-card-4 w3-white w3-text-grey w3-container"
        id="about"
      > */}
      <div className="w3-row-padding">
        {/* <!-- Left Column --> */}
        <div className="w3-twothird w3-animate-bottom">
          <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="w3-margin-right w3-xxlarge w3-text-theme" />
              About Me
            </h2>
            <p>
              Former QA Manager turned Web Developer, recently graduated from
              the University of Arizona's intensive Full Stack Coding Bootcamp.
              While drawing on my 16 years of tech industry experience and
              passion for finding and solving problems, I am anxious to
              demonstrate and expand my skills in React, HTML, CSS, JavaScript,
              SQL and NoSQL databases, and Node.js in front end development.
            </p>
            <br />
            <p>
              I have spent my 16 year career so far working as QA in video
              games, starting as a tester working on PC and prototype Xbox games
              and working my way up to QA manager at a mobile games publisher in
              Germany. In Germany I managed and trained a team of QA Leads
              working on various projects with different first and third party
              development teams. I worked on many games through the years, but
              the most well known are from PopCap Games where I worked on many
              version of Plants vs. Zombies and the standalone iOS version of
              Bejeweled Blitz among others. Having gone as far as I wanted to on
              that career path I decided it was time to start over and so now I
              am looking into an exciting new career as a Web Developer.
            </p>
            <br />
            <br />
          </div>
        </div>

        {/* <div className="w3-third w3-animate-top">
          <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container">
              <img
                src="https://picsum.photos/445/296/?random"
                alt="Avatar"
                id="avatar"
              />
              <div className="w3-display-bottomleft w3-container w3-text-black">
                <h2>Bob Church</h2>
              </div>
            </div>
          </div>
          <br />

        </div> */}
        {/* <!-- End Left Column --> */}

        {/* <!-- Right Column --> */}
        <div className="w3-third w3-animate-top">
          <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container">
              <img
                src="https://picsum.photos/445/296/?random"
                alt="Avatar"
                id="homeImage"
              />
              <div className="w3-display-bottomleft w3-container w3-text-black">
                <h2>Bob Church</h2>
              </div>
            </div>
          </div>
          <br />
        </div>

        {/* <div className="w3-twothird w3-animate-bottom">
          <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="w3-margin-right w3-xxlarge w3-text-theme" />
              About Me
            </h2>
            <p>
              Former QA Manager turned Web Developer, recently graduated from
              the University of Arizona's intensive Full Stack Coding Bootcamp.
              While drawing on my 16 years of tech industry experience and
              passion for finding and solving problems, I am anxious to
              demonstrate and expand my skills in React, HTML, CSS, JavaScript,
              SQL and NoSQL databases, and Node.js in front end development.
            </p>
            <br />
            <p>
              I have spent my 16 year career so far working as QA in video
              games, starting as a tester working on PC and prototype Xbox games
              and working my way up to QA manager at a mobile games publisher in
              Germany. In Germany I managed and trained a team of QA Leads
              working on various projects with different first and third party
              development teams. I worked on many games through the years, but
              the most well known are from PopCap Games where I worked on many
              version of Plants vs. Zombies and the standalone iOS version of
              Bejeweled Blitz among others. Having gone as far as I wanted to on
              that career path I decided it was time to start over and so now I
              am looking into an exciting new career as a Web Developer.
            </p>
          </div>
        </div> */}

        {/* <!-- End Right Column --> */}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
