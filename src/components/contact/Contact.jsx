import React from "react";
import tag1 from "../../images/tag4.png";
import tag2 from "../../images/tag5.png";
import tag3 from "../../images/tag6.png";
import "../homepage/printPromise/printPromise.css"


const Card = (props) => {
    return (
        <div className="card promiseCard ">
            <img src={props.imgsrc} className="cardImg" />
            <p className="card-title titleText">{props.title}</p>
            <p className="card-text descText">{props.desc}</p>
        </div>
    );
};

const Contact = () => {
    return (
        <div style={{ backgroundColor: "#F6F6F6", paddingBottom: "20px"}}>
            <h2 className="promiseHeading">Keep In Touch</h2>
            <div className="cardContainer">
            <Card imgsrc={tag1} title="Call Us" desc="+91 9632418602" />
            <Card imgsrc={tag2} title="Email Us" desc="hello@ehsprints.com" />
            <Card imgsrc={tag3} title="Location" desc="45, old Agarwal Nagar, Indore, MP" />
            </div>
        </div>
    );
};

export default Contact;