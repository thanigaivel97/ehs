import React from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Footer = (props) => {
    const [authUser, setAuthUser] = React.useState("");
  React.useEffect(() => {
     if (JSON.parse(localStorage.getItem("userDetails123")))
       setAuthUser(
         JSON.parse(localStorage.getItem("userDetails123")).emailid ||
           JSON.parse(localStorage.getItem("userDetails123")).phonenumber
       );
   }, [props.loginResponse]);
    return (
        <div className="p-2 p-sm-5 mt-3" style={{ background: "#003459" }}>
        <Grid className=" d-none d-sm-block ">
          <Grid.Row columns="4" className="d-flex justify-content-around">
            <Grid.Column >
              <ul>
                <h3 className="footerhead">Products</h3>
                <Link to="/cat/posters" className="footertxt">
                  Posters
                </Link>
                <Link to="/cat/signages" className="footertxt">
                  Signages
                </Link>
                <Link to="/cat/campaigns" className="footertxt">
                  Campaigns
                </Link>
                <Link to="/cat/floor-graphics" className="footertxt">
                  Floor Graphics
                </Link>
                <Link to="/cat/asset-marking" className="footertxt">
                  Asset Marking
                </Link>
                <Link to="/posters" className="footertxt">
                  Do It Yourself(DIY)
                </Link>
              </ul>
            </Grid.Column>
            <Grid.Column >
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
            <Grid.Column >
              <ul >
                <h3 className="footerhead">Contact Us</h3>
                <li className="footertxt">Timings (Mon - Sat: 7:00 - 21:00)</li>
                <li className="footertxt">
                  45, old Agrawal Nagar, Indore, Madhya Pradesh, Pin: 452001
                </li>
                <li className="footertxt">Mobile No : +91 9632418602</li>
                <li className="footertxt">Email ID : hello@ehsposters.com</li>
              </ul>
            </Grid.Column>
            <Grid.Column >
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
        <div className="d-block d-sm-none mb-2 mx-3">
                <h3 className="text-center mb-0" style={{
                  fontFamily: "Segoe UI",
                  fontWeight: "600",
                  fontSize: "20px",
                  letterSpacing: "0px",
                  color: "#ffffff",
                  opacity: "1",
                  }}>About</h3>
            <div className="text-center d-flex justify-content-around align-items-center" style={{color: "#FFFFFF"}}>
                <Link to="/privacy-policy" style={{
                  fontFamily: "Segoe UI",
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: "0px",
                  opacity: "1",
                  color: "#FFFFFF"
                  }}>
                  Privacy Policies
                </Link>|
                <Link to="/faq" style={{
                  fontFamily: "Segoe UI",
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                  opacity: "1",
                  }}>
                  FAQ
                </Link>|
                <Link to="/support" style={{
                  fontFamily: "Segoe UI",
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                  opacity: "1",
                  }}>
                  Support
                </Link>|
                <Link to="/affiliate" style={{
                  fontFamily: "Segoe UI",
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                  opacity: "1",
                  }}>
                  Join Us
                </Link>
              </div>
            </div>
        <div className="d-block d-sm-none text-center ">
                <h3 className="mx-auto text-center mb-1" style={{
                  fontFamily: "Segoe UI",
                  fontWeight: "600",
                  fontSize: "20px",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                  opacity: "1",
                  }}>Contact Us</h3>
                <li className=" mb-1" style={{
                  fontFamily: "Segoe UI",
                  fontWeight: "normal",
                  fontSize: "10px",
                  lineHeight: "12px",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                  opacity: "1",
                  listStyleType: "none"
                  }}>Timings (Mon - Sat: 7:00 - 21:00)</li>
                <li className=" mb-1" style={{
                  fontFamily: "Segoe UI",
                  fontWeight: "normal",
                  fontSize: "10px",
                  lineHeight: "12px",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                  opacity: "1",
                  listStyleType: "none"
                  }}>
                  45, old Agrawal Nagar, Indore, Madhya Pradesh, Pin: 452001
                </li>
                <li  style={{
                  fontFamily: "Segoe UI",
                  fontWeight: "normal",
                  fontSize: "10px",
                  lineHeight: "12px",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                  opacity: "1",
                  listStyleType: "none"
                  }}>Mobile No : +91 9632418602</li>
                <li  style={{
                  fontFamily: "Segoe UI",
                  fontWeight: "normal",
                  fontSize: "10px",
                  lineHeight: "12px",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                  opacity: "1",
                  listStyleType: "none"
                  }}>Email ID : hello@ehsposters.com</li>
            </div>
      </div>
    );
};

export default Footer;