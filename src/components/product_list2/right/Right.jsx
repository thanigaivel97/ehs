/*jshint esversion: 6 */
import { useState } from "react";
import React from "react";
import PremiumSelfPoster from "../../../images/PremiumSelf.svg";
import { Grid, Image } from "semantic-ui-react";
import BreadVector from "../../../images/BreadVector.svg";
import Card2 from "../../category_page/Card2";
import $ from "jquery";
import Tick from "../../../images/tick.svg";
import Close from "../../../images/ExitBtn.svg";
import DidYouPoster from "../../../images/DidYouPoster.svg";
import DisInfect from "../../../images/DisInfectant.svg";
import { Link } from "react-router-dom";

export const BottomAddedCart = (props) => {
  const { name, quantity } = props.det;
  return (
    <Grid>
      <Grid.Row columns="2">
        <Grid.Column className="ml-2">
          <img
            src={`data:${props.det?.imgUrl?.contentType};base64,${props.det?.imgUrl?.data}`}
            alt={name}
            width="100"
            height="120"
          />
          <img
            style={{ position: "fixed", bottom: "151px", right: "323px" }}
            src={Tick}
            alt=""
          />
        </Grid.Column>
        <Grid.Column className="ml-3 pt-2" style={{ width: "200px" }}>
          <img
            onClick={() => {
              $("#bottomCart").css("display", "none");
            }}
            src={Close}
            alt=""
            style={{
              cursor: "pointer",
              width: "20px",
              height: "20px",
              position: "fixed",
              right: "40px",
              marginTop: "-16px",
            }}
          />
          <p className="addedToCartBot">Added to Cart</p>
          <p className="botTitle">{name}</p>
          <p className="quant">
            {" "}
            Quantity: <span> {quantity} </span>{" "}
          </p>
          <Link to="/cart" className="bottomViewCart">
            View Cart
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const Right = (props) => {
  const cardDet = {
    src: DisInfect,
    title: "Floor Graphics | Printable Catalog | PRD-FG009",
    by: "By Pankaj Jadhav",
    isInStock: true,
    rate: 4.6,
    price: 400,
    bought: "473",
  };

  const [bottomDet, setBottomDet] = useState({});

  const addToCart = (bottomDet) => {
    setBottomDet(bottomDet);
    $("#bottomCart").css("display", "block");
    props.setCartCountFun(bottomDet);
  };

  return (
    <Grid centered columns={1}>
      <Grid.Column className="justify-content-center mt-3">
        <Image
          style={{ width: "102%" }}
          className="justify-content-center"
          src={PremiumSelfPoster}
        />
      </Grid.Column>

      <Grid.Column className="mt-3">
        <Link className="breadLink" to="/">
          Home
        </Link>{" "}
        <img src={BreadVector} className="mr-1" width="10" height="10" alt="" />
        <Link className="breadLink" to="/posters">
          Posters
        </Link>{" "}
        <img src={BreadVector} className="mr-1" width="10" height="10" alt="" />
        <span className="breadLink" to="/posters/covid-19">
          COVID-19
        </span>
      </Grid.Column>

      <Grid.Column>
        <p
          style={{
            fontFamily: "Source Sans Pro",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "22px",
            color: "#000000",
          }}
        >
          COVID-19 Posters
        </p>
      </Grid.Column>

      <Grid.Row
        columns="4"
        className="mt-1 ml-1"
        style={{ marginTop: "-15px" }}
      >
        {[...Array(4)].map((v, i) => (
          <Grid.Column key={i} className={i !== 0 ? "ml-3" : ""}>
            <Card2
              data={cardDet}
              addToCart={addToCart}
              isCardClickAvail={true}
            />
          </Grid.Column>
        ))}
      </Grid.Row>

      <Grid.Row
        columns="4"
        className="mt-1 ml-1"
        style={{ marginTop: "-15px" }}
      >
        {[...Array(4)].map((v, i) => (
          <Grid.Column key={i} className={i !== 0 ? "ml-3" : ""}>
            <Card2
              data={cardDet}
              addToCart={addToCart}
              isCardClickAvail={true}
            />
          </Grid.Column>
        ))}
      </Grid.Row>

      <Grid.Row
        columns="4"
        className="mt-1 ml-1"
        style={{ marginTop: "-15px" }}
      >
        {[...Array(4)].map((v, i) => (
          <Grid.Column key={i} className={i !== 0 ? "ml-3" : ""}>
            <Card2
              data={cardDet}
              addToCart={addToCart}
              isCardClickAvail={true}
            />
          </Grid.Column>
        ))}
      </Grid.Row>

      <Grid.Row
        columns="4"
        className="mt-1 ml-1"
        style={{ marginTop: "-15px" }}
      >
        {[...Array(4)].map((v, i) => (
          <Grid.Column key={i} className={i !== 0 ? "ml-3" : ""}>
            <Card2
              data={cardDet}
              addToCart={addToCart}
              isCardClickAvail={true}
            />
          </Grid.Column>
        ))}
      </Grid.Row>

      <Grid.Row className="justify-content-center mt-4">
        <p className="page mr-1 pt-1">Page</p>
        <a href="/#" className="pageLink text-center pt-1 activePage ml-3 mr-2">
          1
        </a>
        <a href="/#" className="pageLink text-center pt-1  ml-3 mr-2">
          2
        </a>
        <a href="/#" className="pageLink text-center pt-1 ml-3 mr-2">
          3
        </a>
        <a href="/#" className="pageLink text-center pt-1 ml-3 mr-2">
          4
        </a>
      </Grid.Row>
      <Grid.Column className="justify-content-center mt-3">
        <Image
          style={{ width: "102%" }}
          className="justify-content-center"
          src={DidYouPoster}
        />
      </Grid.Column>
      <div
        id="bottomCart"
        className="pt-3 pl-4"
        style={{
          width: "320px",
          height: "150px",
          backgroundColor: "white",
          zIndex: "22",
          position: "fixed",
          bottom: "30px",
          right: "30px",
          boxShadow: "0px 2px 20px 4px rgba(0, 0, 0, 0.25)",
          display: "none",
        }}
      >
        <BottomAddedCart det={bottomDet} />
      </div>
    </Grid>
  );
};

export default Right;
