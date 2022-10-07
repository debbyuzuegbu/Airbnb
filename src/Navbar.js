import React from "react";
// import Airbnb from "/IMAGE/airbnb1.png"
import "./App.css"

function Navbar(props) {
    return(
        <nav className="nav">
            <img src={`/IMAGE/${props.image}`} alt="Airbnb" className="nav--logo"></img>
        </nav>
    )
    
};

export default Navbar;