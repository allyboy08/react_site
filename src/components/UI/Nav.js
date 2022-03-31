import React from "react";
import { NavLink, Link} from 'react-router-dom';

import { useDarkMode } from "../mode/dark";
import './Nav.css';
import logo from '../../assets/logo1.png'

const Nav = () => {
    const [enable, setEnable] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault();
        setEnable(!enable);
      };

    return (
        <header className="header">
        <nav className="navbar">
          <div className="brand-title">
              <Link to="/" >
        <img src={logo} alt="logo" className="logo" />
      </Link>
                    </div>
          
                    <div
                        className="toggle-button"
                        onClick={() => {
                          const NavLinks =
                          document.getElementsByClassName(
                            'navbar-links'
                            )[0]
                            NavLinks.classList.toggle('active')
                          }}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <div className="navbar-links">
                        <ul>
                        <li>
                        <NavLink to="/characters">Characters</NavLink>
                        </li>
                        <li>
                        <NavLink to="/planets" >Planets</NavLink>
                        </li>
                        <li>
                        <NavLink to="/species" >Species</NavLink>
                        </li>
                    <div className="dark-mode__toggle">
            <div
              onClick={toggleMode}
              className={enable ? "toggle toggled" : "toggle"}
            />
          </div>
                        </ul>
                    </div>
                    
                </nav>
        </header>
    )
} 

export default Nav;


