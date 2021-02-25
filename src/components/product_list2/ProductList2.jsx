/*jshint esversion: 6 */
import React from "react";
import Left from "./left/Left";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Right from "./right/Right";

const ProductList2 = (props) => {
  const [path, setPath] = React.useState();
const [authUser, setAuthUser] = React.useState("");

  React.useEffect(() => {
    setPath(props.subCat);

    if (JSON.parse(localStorage.getItem("userDetails123")))
      setAuthUser(
        JSON.parse(localStorage.getItem("userDetails123")).emailid ||
          JSON.parse(localStorage.getItem("userDetails123")).phonenumber
      );
  }, [props.subCat]);

  return (
    <div>
      <div className="row">
        <div className="col-sm-3 mt-3 leftProduct">
          <Left path={path} />
        </div>
        <div className="col pr-5">
          <Right setCartCountFun={props.setCartCountFun} path={path} />
        </div>
      </div>

      <div className="mt-5" style={{ width: "100%", background: "#003459" }}>
        <Grid style={{ paddingTop: "50px", paddingBottom: "30px" }}>
          <Grid.Row columns="4" className="ml-4">
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

                <li className="footertxt">Order Tracking</li>
                <Link to="/signup" className="footertxt">
                  Create An Account
                </Link>
                <li className="footertxt">New User Guide</li>
              </ul>
            </Grid.Column>
            <Grid.Column className="ml-5 pl-5">
              <ul>
                <h3 className="footerhead">Contact Us</h3>
                <li className="footertxt">Timings (Mon - Sat: 7:00 - 21:00)</li>
                <li className="footertxt">
                  45, old Agrawal Nagar, Indore, Madhya Pradesh, Pin: 452001
                </li>
                <li className="footertxt">Mobile No : +91 9632418602</li>
                <li className="footertxt">Email ID : hello@ehsposters.com</li>
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
    </div>
  );
};

export default ProductList2;
