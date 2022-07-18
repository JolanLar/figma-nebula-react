import React from 'react';
import './Rocket.css';
import rocket from "./rocket.svg";

function Rocket() {
  return (
    <div className="Rocket">
        <div className="trail">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <img src={rocket} alt="rocket"/>
    </div>
  );
}

export default Rocket;