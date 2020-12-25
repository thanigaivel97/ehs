/*jshint esversion: 6 */
import React from "react";
import Accordition from "./Accordition";
import LeftImages from "../../homepage/leftimages/LeftImages";

import one from "../../../images/GetSigPoster.svg";
import two from "../../../images/FloorGraphicsPoster.svg";
import three from "../../../images/CheckOutAssetPoster.svg";
import four from "../../../images/BuildYourPoster.svg";
import five from "../../../images/JoinUsPoster.svg";

const Left = () => {

    const imgs = [one, two, three, four, five];

  return (
    <div className="p-2">
      <Accordition />
      <hr />
      <LeftImages imgs={imgs} />
    </div>
  );
};

export default Left;
