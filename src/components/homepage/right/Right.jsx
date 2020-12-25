import React from "react";
import "./Right.css";
import FloorBox from "./floorbox/FloorBox";
import PosterImg from "../../../images/Poster.svg";
import FourImg from "./FourImg";

import VideoBlock from "./videos/VideoBlock";

import FloorImg from "../../../images/floor1.svg";
import ArtistImg from "../../../images/Artist.svg";
import SecondImg from "../../../images/Second.svg";

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

const PayOff = (props) => {
  return (
    <div className="p-3">
      <img
        src={props.src}
        style={{
          width: "250px",
          height: "275px",
          display: "block",
          margin: "auto",
        }}
        alt=""
      />
      <p className="secondText text-center">
        GENERATE PERFORMA ONLINE AND PAY EASILY
      </p>
    </div>
  );
};

const Right = () => {
  const floorBoxTitleImg = [
    { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
    { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
    { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
    { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
  ];

  const artistImgTitle = [
    { src: ArtistImg, title: "By Katherine" },
    { src: ArtistImg, title: "By Siddhesh" },
    { src: ArtistImg, title: "By Katherine" },
    { src: ArtistImg, title: "By Siddhesh" },
  ];

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

  return (
    <>
      <FloorBox
        one={<FourImg data={floorBoxTitleImg} />}
        two={<PayOff src={SecondImg} />}
        three={<FourImg data={artistImgTitle} />}
        isArtist={true}
      />
      <img
        className="mt-4 mb-4"
        src={PosterImg}
        style={{ width: "100%" }}
        alt="Poster"
      />
      <p className="text-center mt-3 mb-3 newHere">New Here</p>
      <FloorBox
        one={<FourImg data={warnImgTitle} />}
        two={<FourImg data={FloorGraphicsImgTitle} />}
        three={<FourImg data={awareImgTitle} />}
        isArtist={false}
      />
      <VideoBlock />
    </>
  );
};

export default Right;
