import React from "react";
import "./visitor.css";

const Visitor = () => {
    return(
<div  className="d-flex justify-content-around visitorContainer">
        <h1 className="visitor" >4500+ <span className="visitorHead">VISITORS</span></h1>
        <span className="mt-4 dot"></span>
        <h1 className="visitor">1100+ <span className="visitorHead">CUSTOMERS</span></h1>
        <span className="mt-4 dot"></span>
        <h1 className="visitor">250+ <span className="visitorHead">DESIGNERS</span></h1>
</div>
    );
};

export default Visitor;