import React from 'react';
import './App.css';
import Rocket from '../Rocket/Rocket';
import SolarSystem from "../SolarSystem/SolarSystem";

function App() {
    return (
        <div className="App">
            <div className="main">
                <div className="left">
                    <Rocket/>
                    <span className={"slogan"}>We explore<br/> the <span>galaxy.</span></span>
                    <span className="text">Nebula is a community of physicists dedicated to
                        <span> space exploration and innovation</span>.
                        We are on a mission to make scientific breakthroughs that will benefit humanity.
                    </span>
                    <div className="buttons">
                        <button>Support us</button>
                        <button>Our Mission</button>
                    </div>
                </div>
                <div className="right">
                    <SolarSystem/>
                </div>
            </div>
        </div>
    );
}

export default App;
