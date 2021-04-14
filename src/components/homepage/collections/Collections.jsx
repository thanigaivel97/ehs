/*jshint esversion: 6 */
import React from "react";
import "./Collections.css";
import PosterImg from "../../../images/Posters.svg";
import Signages from "../../../images/Signages.svg";
import FloorImg from "../../../images/FloorGraphics.svg";
import AssetImg from "../../../images/AssetMarking.svg";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={"/cat/" + props.title.toLowerCase()}>
      <div
        className="p-4 animateCard posterCard" >
        <div className="mx-auto d-block ">
          <img  
            className="mx-auto d-block mb-3 cardImg" 
            src={props.src}
            alt={props.alt}
          />
          <p
            style={{ fontFamily: "Source Sans Pro", color: "#000000 " }}
            className="text-center posterTitle"
          >
            {props.title}{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

const Collections = () => {
  return (
        <div className="row posters pt-3 pb-3  padding-10">
          <Card src={PosterImg} alt="Posters" title="Posters" />
          <Card src={Signages} alt="Signages" title="Signages" />
          <Card src={FloorImg} alt="Floor Graphics" title="Floor-Graphics"/>
          <Card src={AssetImg} alt="Asset Markings" title="Asset-Marking" />
        </div>
  );
};
export default Collections;
