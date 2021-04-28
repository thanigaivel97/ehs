/*jshint esversion: 6 */
import React from "react";
import Design from "./design/Design";
import Collections from "./collections/Collections";
import BottomImg from "../../images/BottomImg.svg";
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
        margin: "0 0 60px 0"
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
          className="mb-3 mb-sm-5 mx-auto d-none d-sm-block"
          style={{ display: "block", width: "80%" }}
          src={BottomImg}
          alt="Bottom Img"
        />
       
    
      
    </>
  );
};

export default HomePage;
