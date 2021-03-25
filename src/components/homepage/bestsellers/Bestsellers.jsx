import React from "react";
import "./bestsellers.css"
import NoSmoke from "../../../images/NoSmoke.svg";
import WearMask from "../../../images/WearMask.svg";
import Fire from "../../../images/Fire.svg";
import NoTouch from "../../../images/NoTouch.svg";

import SafeTwo from "../../../images/BeSafe.svg";
import Mind from "../../../images/Mind.svg";
import BeforeStart from "../../../images/BeforeStart.svg";

import FootPrint from "../../../images/FootPrint.svg";
import OvalTwoMen from "../../../images/OvalTwoMen.svg";
import RoundTwoMen from "../../../images/RoundTwoMen.svg";
import RoundMask from "../../../images/RoundMask.svg";

import FloorImg from "../../../images/floor1.svg";

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
 

const ncard = (val) => {
    return (
        <ImgBox src={val.src} title={val.title} />
    );
};

const ImgBox = (props) => {
  return (
    <div className="text-center imgBox">
      <img className="imgBoxImg" src={props.src} alt="" />
      <p
        className="imgBoxTitle"
      >
        {props.title}
      </p>
    </div>
  );
};
const Bestsellers = () => {

    const warnImgTitle = [
        { src: NoSmoke, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: WearMask, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: Fire, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: NoTouch, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
      ];
    
      const FloorGraphicsImgTitle = [
        { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        {
          src: BeforeStart,
          title: "Floor Graphics | Printable Catalog | PRD-FG009",
        },
      ];
    
      const awareImgTitle = [
        { src: FootPrint, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
        {
          src: OvalTwoMen,
          title: "Floor Graphics | Printable Catalog | PRD-FG009",
        },
        {
          src: RoundTwoMen,
          title: "Floor Graphics | Printable Catalog | PRD-FG009",
        },
        { src: RoundMask, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
      ];

       


    return(
        <div className="sellerContainer">
            <h2 className="promiseHeading mb-5">Our Bestsellers</h2>
            <div className="d-flex justify-content-around">
            <ArrowBackIosRoundedIcon  className="bg-secondary rounded-circle" />
            <h3 className="sellerHead active">POSTERS</h3>
            <h3 className="sellerHead">Signages</h3>
            <h3 className="sellerHead">Floor Graphics</h3>
            <h3 className="sellerHead">Asset Markings</h3>
            <ArrowForwardIosRoundedIcon className="bg-secondary rounded-circle"  />
            </div>

            <div className="sellerPoster" style={{backgroundColor: "#F6F6F6"}}>
                {FloorGraphicsImgTitle.map(ncard)}
            </div>
            <p className="seemore">See More</p>
        </div>
    );
};

export default Bestsellers;