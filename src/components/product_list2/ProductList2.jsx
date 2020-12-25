/*jshint esversion: 6 */
import React from "react";
import Left from "./left/Left";
import Right from "./right/Right";

const ProductList2 = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-3 mt-3 leftProduct">
          <Left />
        </div>
        <div className="col pr-5">
          <Right setCartCountFun={props.setCartCountFun} />
        </div>
      </div>

      <div
        className="mt-5"
        style={{ width: "100%", height: "200px", background: "#003459" }}
      ></div>
    </div>
  );
};

export default ProductList2;
