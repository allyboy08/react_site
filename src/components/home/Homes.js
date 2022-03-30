import React from "react";
import { Link } from "react-router-dom";

import logo from '../../assets/logo.png'
import "./Homes.css";

function Homes() {
  return (
    <header>
        <h1>Star Wars Explorer</h1>
      <div>
        <div className="Home-Items-Container">
            <Link className="Home-Item-link" to="/characters">
          <div className="Home-Item-Wrapper">
              <img
                src="https://starwars-visualguide.com/assets/img/categories/character.jpg"
                alt="People"
              />
              <div className="Home-Item-label">Information on all star wars Characters</div>
          </div>
            </Link>
            
            <Link className="Home-Item-link" to="/planets">
          <div className="Home-Item-Wrapper">
              <img
                src="https://starwars-visualguide.com/assets/img/categories/planets.jpg"
                alt="Planets"
              />
              <div className="Home-Item-label">Information on all star wars Planets</div>
          </div>
            </Link>
          
          
            <Link className="Home-Item-link" to="/species">
          <div className="Home-Item-Wrapper">
              <img
                src="https://starwars-visualguide.com/assets/img/categories/species.jpg"
                alt="Species"
              />
              <div className="Home-Item-label">Information on all star wars Species</div>
          </div>
            </Link>
        </div>
      </div>
    </header>
  );
}

export default Homes;
