import React from "react";
import "./card.css"

const Card = (props) => {
    return (
        <div className="card promoCard">
            <img src={props.imgsrc} className="card-img-top" alt="off" />
            <div className="card-body text-center">
                <h5 className="card-title text-uppercase" id="card-title">{props.title}</h5>
                <p className="card-text" id="card-text">{props.desc}</p>
            </div>
        </div>
    );
};

export default Card;