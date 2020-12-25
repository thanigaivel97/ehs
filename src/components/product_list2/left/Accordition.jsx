/*jshint esversion: 6 */
import React, { useState } from "react";
import DownVector from "../../../images/DownVector.svg";
import RightVector from "../../../images/RightVector.svg";

const Accordition = () => {
  const [sib, setSib] = useState({
    productSib: true,
    assetSib: false,
    floorSib: false,
    posterSib: true,

    compaignSib: false,

    quickSib: true,
    covid19Sib: true,
  });

  const accorditionOnClick = (e) => {
    e.preventDefault();
    setSib((oldsib) => {
      return {
        ...oldsib,
        [e.target.nextSibling.id]: !sib[e.target.nextSibling.id],
      };
    });
  };

  return (
    <div>
      <div>
        <a onClick={accorditionOnClick} href="/#" className="accorditionRoot">
          <img
            src={sib.productSib ? DownVector : RightVector}
            className="m-2"
            alt=""
            width="10"
            height="10"
          />
          PRODUCTS
        </a>

        <div
          id="productSib"
          style={{ display: sib.productSib ? "block" : "none" }}
          className="sib ml-4"
        >
          <div>
            <a
              onClick={accorditionOnClick}
              href="/#"
              className="accorditionRootChild"
            >
              <img
                src={sib.assetSib ? DownVector : RightVector}
                className="m-2"
                alt=""
                width="10"
                height="10"
              />
              Asset Marking
            </a>
            <div
              id="assetSib"
              style={{ display: sib.assetSib ? "block" : "none" }}
              className="sib pl-4"
            ></div>
          </div>
          <div>
            <a
              onClick={accorditionOnClick}
              href="/#"
              className="accorditionRootChild"
            >
              <img
                src={sib.floorSib ? DownVector : RightVector}
                className="m-2"
                alt=""
                width="10"
                height="10"
              />
              Floor Graphics
            </a>
            <div
              id="floorSib"
              style={{ display: sib.floorSib ? "block" : "none" }}
              className="sib pl-4"
            ></div>
          </div>
          <div>
            <a
              onClick={accorditionOnClick}
              href="/#"
              className="accorditionRootChild"
            >
              <img
                src={sib.posterSib ? DownVector : RightVector}
                className="m-2"
                alt=""
                width="10"
                height="10"
              />
              Posters
            </a>
            <div
              id="posterSib"
              style={{ display: sib.posterSib ? "block" : "none" }}
              className="pl-5 accordionDirectChild"
            >
              <div>
                <a href="/#" className="accorditionRootChild ">
                  COVID-19
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="/#" onClick={accorditionOnClick} className="accorditionRoot">
          <img
            src={sib.compaignSib ? DownVector : RightVector}
            className="m-2"
            alt=""
            width="10"
            height="10"
          />
          CAMPAIGNS
        </a>
        <div id="compaignSib"></div>
      </div>
      <div>
        <a href="/#" onClick={accorditionOnClick} className="accorditionRoot">
          <img
            src={sib.quickSib ? DownVector : RightVector}
            className="m-2"
            alt=""
            width="10"
            height="10"
          />
          QUICK LINKS
        </a>
        <div
          id="quickSib"
          className="ml-4"
          style={{ display: sib.quickSib ? "block" : "none" }}
        >
          <div>
            <a href="/#" className="accorditionRootChild">
              <img
                src={RightVector}
                className="m-2"
                alt=""
                width="10"
                height="10"
              />
              COVID-19
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordition;
