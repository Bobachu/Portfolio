import React from "react";

function Portfolio() {
  return (
    <div
      className="w3-content w3-container w3-padding-64 w3-card-4 w3-animate-opacity"
      id="portfolio"
    >
      <h3 className="w3-center w3-wide">PORTFOLIO</h3>
      <p className="w3-center">
        <em>
          Here are some links to projects I have worked on
          <br /> Click on the images to go to the deployed pages
        </em>
      </p>
      <br />

      {/* <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) --> */}
      <div className="w3-row-padding">
        <a
          href="https://bobachu.github.io/project1/"
          target="_blank"
          rel="noopener noreferrer"
          className="w3-col m3 w3-display-container w3-hover-grayscale w3-animate-left w3-dropdown-hover"
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
        <div className=" w3-card-4 w3-border">
          <p>Geocaching for meteorites</p>
          <p style={{ textDecoration: "underline" }}>Description</p>
          <p className="w3-padding">
            Using data from the NASA meteorite landing API combined with Google
            Maps API we made a site that allowed people to find meteorites that
            have landed near any location they wish to search. we also save the
            searches using Google Firebase so you can see the places searched
            before.
          </p>
          <a
            href="https://github.com/Bobachu/project1"
            className="w3-bar-item w3-button"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textAlign: "center" }}
          >
            GitHub Repository
          </a>
        </div>
        <br />

        <a
          href="https://obscure-atoll-11517.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w3-col m3 w3-display-container w3-hover-grayscale w3-animate-top w3-dropdown-hover"
        >
          <img
            src="./images/avocado.png"
            // className="w3-hover-opacity"
            alt="Avocado"
            style={{ width: 216, height: 162 }}
          />
          <div className="w3-display-bottomleft w3-container w3-text-white">
            <p className="w3-black w3-padding-small">Avocado Crumble</p>
          </div>
        </a>
        <div className=" w3-card-4 w3-border">
          <p>The answer to what's for dinner</p>
          <p style={{ textDecoration: "underline" }}>Description</p>
          <p className="w3-padding">
            Using the Yummly API users can enter a primary and secondary
            ingredient they have on hand and get a list of recipes they can make
            with them. They can also enter specific diet restrictions and
            allergies. A SQL database is used to save the past searches that are
            then shown on the bottom of the page and can be searched again by
            clicking on the search button attached to them. Users are also able
            to enter their own recipes and future development would allow those
            recipes to be included in a search, for now these are stored in a
            SQL database. The page is rendered using Handlebars and W3Schools
            CSS for styling.
          </p>
          <a
            href="https://github.com/Bobachu/project2"
            className="w3-bar-item w3-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <br />
        <a
          href="https://banana-cupcake-16306.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w3-col m3 w3-display-container w3-hover-grayscale w3-animate-bottom w3-dropdown-hover"
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
        <div className="w3-card-4 w3-border">
          <p>Is that video game appropriate for your kid?</p>
          <p style={{ textDecoration: "underline" }}>Description</p>
          <p className="w3-padding">
            The goal of this site was to make a resource for parents to they can
            find out about video game their children want them to buy. Using the
            GiantBomb api, Internet Games Database API, and the Twitch API users
            can search for a game and see the ESRB rating and detailed content
            information. They can also see people playing the game live using
            the Twitch video links on the search results page. Users can also
            create accounts and save items to a wishlist so they can come back
            later to find them. User accounts and wishlists were stored using a
            mongo database. Future development plans are to add a more robust
            user system with user reviews, links to their past searches, and
            chat for logged in users. Also possible plans to allow purchasing
            directly through the site instead of external links.
          </p>
          <a
            href="https://github.com/Bobachu/project3"
            className="w3-bar-item w3-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <br />
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
        <div className="w3-card-4 w3-border">
          <p>A simple rpg battle game using jquery</p>
          <p style={{ textDecoration: "underline" }}>Description</p>
          <p className="w3-padding">
            A simple rpg battle game created using jquery to manipulate the elements on a page. Select a hero then select an opponent from the remaining options. play until you beat all the other heroes or until your hero is defeated.
          </p>
          <a
            href="https://github.com/Bobachu/project2"
            className="w3-bar-item w3-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Portfolio;
