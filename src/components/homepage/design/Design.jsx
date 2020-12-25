/*jshint esversion: 6 */
import React from "react";
import "./Design.css";

const Design = () => {
  return (
    <div className="design row m-0">
      <div className="col-sm-5 d-flex h-100">
        <p
          id="rightText"
          className="text-center ml-5 justify-content-center align-self-center"
        >
          COVID-19 POSTERS TO PROTECT
          <br /> YOURSELF AND YOUR FAMILIES
        </p>
      </div>
      <div className="rectangles col row ml-5 pl-5">
        <div id="blueRect" className="rect ml-5"></div>
        <div id="greenRect" className="rect ml-5"></div>
        <div id="yellowRect" className="rect ml-5"></div>
      </div>
    </div>
  );
};

export default Design;
