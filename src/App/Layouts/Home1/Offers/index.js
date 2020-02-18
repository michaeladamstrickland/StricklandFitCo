import React from 'react';

import Options from './Options'

import { data } from "./data"
import coach from './coach.png'
import "./style.css"

const Offers = () => (
  <div className="home1__offers">
    <div className="home1__coach">
      <img src={coach} alt="Coach" className="home1__coach_img" />
    </div>
    <div className="home1__offers__container">
      <h2 className="home1__offers__title">MUSCLE BUILDING</h2>
      <h3 className="home1__offers__description">12-Week Bulking Trainer Expert Michael Strickland</h3>
      <Options data={data} />
      <button className="home1__offers__signup">
        Sign Up
      </button>
    </div>
  </div>
)

export default Offers;