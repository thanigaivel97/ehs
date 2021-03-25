/*jshint esversion: 6 */
import React from "react";
import Design from "./design/Design";
import Collections from "./collections/Collections";
import BottomImg from "../../images/BottomImg.svg";
import footerbanner1 from "../../images/footerBanner1.jpg"
import footerbanner2 from "../../images/footerBanner2.jpg"
import footerbanner3 from "../../images/footerBanner3.jpg"
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Promotions from "./promotions/Promotions"
import PrintPromise from "./printPromise/PrintPromise";
import Bestsellers from "./bestsellers/Bestsellers";
import Visitor from "./visitor/Visitor";

const HomePage = (props) => {
  const [authUser, setAuthUser] = React.useState("");
  React.useEffect(() => {
     document.title = "Ehs prints";
     if (JSON.parse(localStorage.getItem("userDetails123")))
       setAuthUser(
         JSON.parse(localStorage.getItem("userDetails123")).emailid ||
           JSON.parse(localStorage.getItem("userDetails123")).phonenumber
       );
   }, [props.loginResponse]);
  return (
    <>
      <Design />
      <Collections />
      <div style={{
        borderTop: "6px solid #F6F6F6",
        margin: "20px 0 20px 0"
      }}></div>
      <Promotions />
      <PrintPromise />
      <Visitor />
      <div style={{
        borderTop: "6px solid #F6F6F6",
        margin: "20px 0 20px 0"
      }}></div>
      <Bestsellers />
      <img
          className="mb-5 d-none d-sm-block"
          style={{ display: "block", margin: "0 auto", width: "80%" }}
          src={BottomImg}
          alt="Bottom Img"
        />
        <div className="d-block d-sm-none">
          <img src={footerbanner1} alt="footer"  className="ml-5"  />
          <img src={footerbanner2} alt="footer" className=" ml-4" />
          <img src={footerbanner3} alt="footer" className="ml-2" />
        </div>

      <div className="p-5 mt-3" style={{ backgroundColor: "#003459" }}>
        <Grid>
          <Grid.Row columns="4">
            <Grid.Column className="ml-5">
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
              <ul>
                <h3 className="footerhead">My Account</h3>
                {authUser ? (
                  <>
                    <Link to="/dashboard" className="footertxt">
                      Profile
                    </Link>
                  </>
                ) : (
                  <>
                    <li className="footertxt">Profile</li>
                  </>
                )}

                {authUser ? (
                  <>
                    <Link to="/dashboard" className="footertxt">
                      Order History
                    </Link>
                  </>
                ) : (
                  <>
                    <li className="footertxt">Order History</li>
                  </>
                )}

                <Link to="/track" className="footertxt">
                  Order Tracking
                </Link>
                <Link to="/signup" className="footertxt">
                  Create An Account
                </Link>
                <li className="footertxt">New User Guide</li>
              </ul>
            </Grid.Column>
            <Grid.Column className="ml-5 pl-5">
              <ul className="footertxt">
                <h3 className="footerhead">Contact Us</h3>
                <li>Timings (Mon - Sat: 7:00 - 21:00)</li>
                <li>
                  45, old Agrawal Nagar, Indore, Madhya Pradesh, Pin: 452001
                </li>
                <li>Mobile No : +91 9632418602</li>
                <li>Email ID : hello@ehsposters.com</li>
              </ul>
            </Grid.Column>
            <Grid.Column className="ml-5">
              <ul>
                <h3 className="footerhead">About</h3>
                <Link to="/privacy-policy" className="footertxt">
                  Privacy Policies
                </Link>
                <Link to="/faq" className="footertxt">
                  FAQ
                </Link>
                <Link to="/support" className="footertxt">
                  Support
                </Link>
                <Link to="/affiliate" className="footertxt">
                  Join Us (Affiliate)
                </Link>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
