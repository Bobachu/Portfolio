import React from "react";

function Portfolio() {
  return (
    <div className="w3-content w3-container w3-padding-64 w3-card-4 w3-animate-opacity" id="portfolio">
      <h3 className="w3-center w3-wide">PORTFOLIO</h3>
      <p className="w3-center">
        <em>
          Here are some links to projects I have worked on
          <br /> Click on the images to go to the deployed pages
        </em>
      </p>
      <br />

      {/* <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) --> */}
      <div className="w3-row-padding w3-center">
        <a
          href="https://bobachu.github.io/project1/"
          target="_blank"
          rel="noopener noreferrer"
          className="w3-col m3 w3-display-container w3-hover-opacity w3-animate-left"
        >
          <img
            src="./images/meteorite.jpg"
            // className="w3-hover-opacity"
            alt="meteortite"
            style={{ width: 216, height: 162 }}
          />
          <div className="w3-display-bottomleft w3-container w3-text-white">
            <p className="w3-black w3-padding-small">Meteor Search</p>
          </div>
        </a>

        <a
          href="https://obscure-atoll-11517.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w3-col m3 w3-display-container w3-hover-opacity w3-animate-top"
        >
          <img
            src="./images/avocado.png"
            // className="w3-hover-opacity"
            alt="Coffee beans"
            style={{ width: 216, height: 162 }}
          />
          <div className="w3-display-bottomleft w3-container w3-text-white">
            <p className="w3-black w3-padding-small">Avocado Crumble</p>
          </div>
        </a>

        <a
          href="https://banana-cupcake-16306.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w3-col m3 w3-display-container w3-hover-opacity w3-animate-bottom"
        >
          <img
            src="./images/gamead.jpeg"
            // className="w3-hover-opacity"
            alt="Bear closeup"
            style={{ width: 216, height: 162 }}
          />
          <div className="w3-display-bottomleft w3-container w3-text-white">
            <p className="w3-black w3-padding-small">Game Advisor</p>
          </div>
        </a>

        <a
          href="https://bobachu.github.io/unit-4-game/"
          target="_blank"
          rel="noopener noreferrer"
          className="w3-col m3 w3-display-container w3-hover-opacity w3-animate-right"
        >
          <img
            src="./images/Terra.jpg"
            // className="w3-hover-opacity"
            alt="Quiet ocean"
            style={{ width: 216, height: 162 }}
          />
          <div className="w3-display-bottomleft w3-container w3-text-white">
            <p className="w3-black w3-padding-small">RPG Game</p>
          </div>
        </a>
      </div>
      <br />
    </div>
  );
}

export default Portfolio;
