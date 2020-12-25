/*jshint esversion: 6 */
import React from "react";
import Design from "./design/Design";
import Collections from "./collections/Collections";
import LeftImages from "./leftimages/LeftImages";
import Right from "./right/Right";
import BottomImg from "../../images/BottomImg.svg";

import One from "../../images/One.svg";
import Two from "../../images/Two.svg";
import Three from "../../images/Three.svg";
import Four from "../../images/Four.svg";
import Five from "../../images/Five.svg";

const HomePage = () => {
  const imgs = [One, Two, Three, Four, Five];
  return (
    <>
      
      <Design />
      <Collections />
      <div className="row">
        <div className="col-3">
          <LeftImages imgs={imgs} />
        </div>
        <div className="col pr-5">
          <Right />
        </div>
      </div>
      <div className="p-5 mt-3" style={{ backgroundColor: "#003459" }}>
        <img
          className="mb-5"
          style={{ display: "block", margin: "0 auto", width: "90%" }}
          src={BottomImg}
          alt="Bottom Img"
        />
      </div>
    </>
  );
};

export default HomePage;
