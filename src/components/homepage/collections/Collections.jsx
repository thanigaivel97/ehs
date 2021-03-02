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
    <Link to={"/" + props.title.toLowerCase()}>
      <div
        className="mr-5 p-4  coll animateCard"
        style={{
          border: "1px solid #D2D2D2",
          borderRadius: "25px",
          height: "140px",
          width: "180px",
        }}
      >
        <div className="mx-auto d-block ">
          <img
            className="mx-auto d-block mb-3"
            style={{
              width: "55px",
              height: "55px",
            }}
            src={props.src}
            alt={props.alt}
          />
          <p
            style={{ fontFamily: "Source Sans Pro", color: "#000000 " }}
            className="text-center mt-3"
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
    <div className="row p-3 pl-5">
      <div className="col-sm-3 pl-1">
        <p id="getQText">
          Get High Quality <br />
          Prints for your <br /> Workplace
        </p>
      </div>
      <div className="col pl-5">
        <div className="row pl-3">
          <Card src={PosterImg} alt="Posters" title="Posters" />
          <Card src={Signages} alt="Signages" title="Signages" />
          <Card src={FloorImg} alt="Floor Graphics" title="Floor-Graphics" />
          <Card src={AssetImg} alt="Asset Markings" title="Asset-Marking" />
        </div>
      </div>
    </div>
  );
};
export default Collections;
