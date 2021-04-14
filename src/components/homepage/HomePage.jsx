/*jshint esversion: 6 */
import React from "react";
import Design from "./design/Design";
import Collections from "./collections/Collections";
import BottomImg from "../../images/BottomImg.svg";
import footerbanner1 from "../../images/footerBanner1.jpg"
import footerbanner2 from "../../images/footerBanner2.jpg"
import footerbanner3 from "../../images/footerBanner3.jpg"
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
          <img src={footerbanner1} alt="footer"  className="ml-5"  style={{width: "80%" }} />
          <img src={footerbanner2} alt="footer" className=" ml-4" style={{width: "80%" }} />
          <img src={footerbanner3} alt="footer" className="ml-2" style={{width: "80%" }} />
        </div>
    
      
    </>
  );
};

export default HomePage;
