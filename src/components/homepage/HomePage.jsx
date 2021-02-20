/*jshint esversion: 6 */
import React from "react";
import Design from "./design/Design";
import Collections from "./collections/Collections";
import LeftImages from "./leftimages/LeftImages";
import Right from "./right/Right";
import BottomImg from "../../images/BottomImg.svg";
import { Grid } from "semantic-ui-react";
import One from "../../images/One.svg";
import Two from "../../images/Two.svg";
import Three from "../../images/Three.svg";
import Four from "../../images/Four.svg";
import Five from "../../images/Five.svg";
import { Link } from "react-router-dom";

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
        <Grid>
          <Grid.Row columns="4">
            <Grid.Column className="ml-5 pl-5">
              <ul>
                <h3 className="footerhead">Products</h3>
                <Link to="/posters" className="footertxt">
                  Posters
                </Link>
                <Link to="/signages" className="footertxt">
                  Signages
                </Link>
                <Link to="/campaigns" className="footertxt">
                  Campaigns
                </Link>
                <Link to="/floor-graphics" className="footertxt">
                  Floor Graphics
                </Link>
                <Link to="/asset-marking" className="footertxt">
                  Asset Marking
                </Link>
                <Link to="/posters" className="footertxt">
                  Do It Yourself(DIY)
                </Link>
              </ul>
            </Grid.Column>
            <Grid.Column className="ml-5 pl-5">
              <ul className="footertxt">
                <h3 className="footerhead">My Account</h3>
                <li>Profile</li>
                <li>Order History</li>
                <li>Order Tracking</li>
                <li>Create An Account</li>
                <li>New User Guide</li>
              </ul>
            </Grid.Column>
            <Grid.Column className="ml-5 pl-5">
              <ul className="footertxt">
                <h3 className="footerhead">Contact Us</h3>
                <li>Timings (Mon - Sat: 7:00 - 21:00)</li>
                <li>Office Address</li>
                <li>Mobile No.</li>
                <li>Email ID</li>
              </ul>
            </Grid.Column>
            <Grid.Column className="ml-5 pl-5">
              <ul className="footertxt">
                <h3 className="footerhead">About</h3>
                <li>Privacy Policies</li>
                <li>FAQ</li>
                <li>Services</li>
                <li>Support</li>
                <li>Join Us (Affiliate)</li>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
