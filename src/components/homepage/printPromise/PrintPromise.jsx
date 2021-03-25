import React from "react";
import tag1 from "../../../images/tag1.png";
import tag2 from "../../../images/tag2.png";
import tag3 from "../../../images/tag3.png";
import "./printPromise.css"

const Card = (props) => {
    return (
        <div className="card promiseCard ">
            <img src={props.imgsrc} className="cardImg" />
            <p className="card-title titleText">{props.title}</p>
            <p className="card-text descText">{props.desc}</p>
        </div>
    );
};

const PrintPromise = () => {
    return(
    <div style={{ backgroundColor: "#F6F6F6", paddingBottom: "20px"}}>
        <h2 className="promiseHeading">The EHS Prints Promise</h2>
        <div className="cardContainer">
        <Card imgsrc={tag1} title="Effusive Designs" desc="We provide you a huge variety of highly impactful Visual communications designed by skilled artists all around the Globe!" />
        <Card imgsrc={tag2} title="High Quality Prints" desc="Prints from all our category are printed digitally on best quality durable materials providing effective communication!" />
        <Card imgsrc={tag3} title="Door Step Service" desc="We provide all your orders at your doorstep in least possible time in safest packaging with help of best logistics firms." />
        </div>
    </div>
    );
};

export default PrintPromise;