import React from "react";
// import grid from "./IMAGE/Group_77.png"

function Hero(props) {
    return (
        <div>
             <img src={`/IMAGE/${props.heros}`} className="grid" alt="grid"></img>
             <div className="about-page">
                <h1>Online Experiences</h1>
                <p className="details">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
             </div>
        </div>
       
    )
}

export default Hero;