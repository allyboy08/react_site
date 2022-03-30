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
        <nav>
            <ul>
            <Link to="/" >
        <img src={logo} alt="logo" className="logo" />
      </Link>
                
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
        </nav>
        </header>
    )
} 

export default Nav;