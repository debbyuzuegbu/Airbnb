import React from "react";
// import Rate from "./IMAGE/image12.png"
// import star from "./IMAGE/Star.png"
// import dot from "./IMAGE/Ellipse.png"

function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return(
        <section className="card">
            {badgeText && <div className="card--badge">SOLD OUT</div>}
            <img className="rate" src={`/IMAGE/${props.img}`} alt="Rate"></img>
            <div className="rate-card">
                <p><img className="star" src={`/IMAGE/${props.ratingsImage}`} alt="star"></img></p>
                <p>5.0</p>
                <p>(6)</p>
                <p><img className="dot" src={`/IMAGE/${props.img}`} alt="dot"></img></p>
                <p>USA</p>
            </div>
            <p className="card-details">{props.title}</p>
            <p className="price">{props.price} <span>/ person</span></p>
        </section>

    )
};

export default Card;