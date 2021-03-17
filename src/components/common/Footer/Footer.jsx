import React from 'react'
import { NavLink } from "react-router-dom";
import './Footer.scss';
import Logo from '../../../images/Logo.svg';

export default function Header() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">
            <img className="Logo" src={Logo} alt="logo" />
          </div>
          <div className="students">
            <p className="students__title"> Created by Wild Code School Students</p>
            <div className="students__items">
              <p className="students__item">
                <p>Nazar</p>
                <div className="links">
                  <a href="https://github.com/hidemydreams">GitHub</a> <a href="https://www.linkedin.com/in/nazar-archakov/">LinkedIn</a>
                </div>
              </p>
              <p className="students__item">
                <p>Arseniy</p>
                <div className="links">
                  <a href="https://github.com/Maslovars">GitHub</a> <a href="https://www.linkedin.com/in/arseniy-maslov/">LinkedIn</a>
                </div>
              </p>
              <p className="students__item">
                <p>Tatsiana</p>
                <div className="links">
                  <a href="https://github.com/gortatka">GitHub</a> <a href="https://www.linkedin.com/in/tatsiana-horbatsevich/">LinkedIn</a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
