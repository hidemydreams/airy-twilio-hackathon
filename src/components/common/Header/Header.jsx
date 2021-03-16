import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Header.scss';
import Logo from '../../../images/Logo.svg';

export default function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);


  return (
    <div className="header">
      <div className="container">
        <div className="header__body">
          <NavLink to="/"><img className="Logo" src={Logo} alt="logo" /></NavLink>
          <nav className={`nav ${isNavOpen ? "open-nav" : null}`}>


            <div onClick={() => setIsNavOpen(!isNavOpen)} className="nav__exit-btn">
              <i className="fas fa-times"></i>
            </div>
            <ul className="nav__list">
              <li><NavLink exact={true} to="/">Home</NavLink></li>
              <li><NavLink to="/check">Check Air</NavLink></li>
              <li><NavLink to="/articles">Pollution Articles</NavLink></li>
              <li><NavLink to="/charts">Charts</NavLink></li>
            </ul>
          </nav>


          <div onClick={() => setIsNavOpen(!isNavOpen)} className="header__burger-btn">
            <i className="fas fa-bars"></i>
          </div>


        </div>
      </div>
    </div>
  )
}
