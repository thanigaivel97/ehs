/*jshint esversion: 6 */
import React from "react";
import Left from "./left/Left";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Right from "./right/Right";

const ProductList2 = (props) => {
  const [path, setPath] = React.useState();

  React.useEffect(() => {
    setPath(props.subCat);
    console.log(props.subCat);
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
          <Grid.Row columns="4" className="ml-5">
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
              <ul>
                <h3 className="footerhead">My Account</h3>
                <li className="footertxt">Profile</li>
                <li className="footertxt">Order History</li>
                <li className="footertxt">Order Tracking</li>
                <li className="footertxt">Create An Account</li>
                <li className="footertxt">New User Guide</li>
              </ul>
            </Grid.Column>
            <Grid.Column className="ml-5 pl-5">
              <ul>
                <h3 className="footerhead">Contact Us</h3>
                <li className="footertxt">Timings (Mon - Sat: 7:00 - 21:00)</li>
                <li className="footertxt">Office Address</li>
                <li className="footertxt">Mobile No.</li>
                <li className="footertxt">Email ID</li>
              </ul>
            </Grid.Column>
            <Grid.Column className="ml-5 pl-5">
              <ul>
                <h3 className="footerhead">About</h3>
                <li className="footertxt">Privacy Policies</li>
                <li className="footertxt">FAQ</li>
                <li className="footertxt">Services</li>
                <li className="footertxt">Support</li>
                <li className="footertxt">Join Us (Affiliate)</li>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default ProductList2;
