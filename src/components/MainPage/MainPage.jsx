import React from 'react';
import "./MainPage.scss";
import IMAGE from '../../images/IMAGE.svg';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"

export default function MainPage() {
  return (
    <div className="main-page_section">
      <div className="container">
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="main-page">
          <div className="Title">
            <h1>Know, what you breath</h1>
            <p>A small app which is built to help you getting some information on air quality in any area.</p>
            <NavLink to='/check'>
              <button>Check My Air</button>
            </NavLink>
          </div>
          <div className="main__image">
            <img className="Image" src={IMAGE} alt="air" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
