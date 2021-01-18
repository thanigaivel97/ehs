/* eslint-disable react-hooks/exhaustive-deps */
/*jshint esversion: 9 */
import React from "react";
import DisInfect from "../../images/DisInfectant.svg";
import Blank from "../../images/blank.svg";
import { Link } from "react-router-dom";
import Back from "../../images/back.svg";
import { Grid } from "semantic-ui-react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useEffect, useState } from "react";
import $ from "jquery";
import Left from "../homepage/leftimages/LeftImages";
import Tape from "../../images/tape.svg";
import Pay from "../../images/payment.svg";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Card2 from "../category_page/Card2";
import { BottomAddedCart } from "../product_list2/right/Right";
import { findMat, findDim } from "../../helper/apiPath";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

const Tables = (props) => {
  const cartDet = JSON.parse(localStorage.getItem("listCart12345678910")) || {
    cartList: [],
  };

  var userJson;

  const [numCart, setNumCart] = useState(cartDet.cartList);

  const [num, setNum] = useState(props.navCount || 0);

  const [totalPay, setTotalPay] = React.useState(0);

  function calculate(e) {
    let temp = 0;
    e.map((v) => (temp += v.quantity * v.originalPrice));
    setTotalPay(temp);
    return temp;
  }

  useEffect(() => {
    console.log(numCart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    userJson = JSON.parse(localStorage.getItem("userDetails123")) || {
      user: {},
    };
    console.log(userJson);
  });
  useEffect(() => {
    setTotalPay(calculate(numCart));
  }, []);

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://localhost:8080/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: __DEV__ ? "rzp_test_FvIgaLsvcCd3vG" : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Donation",
      description: "Thank you for nothing. Please give us some money",
      image: { DisInfect },
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: userJson?.user?.firstname + userJson?.user?.lastname,
        email: userJson?.user?.emailid,
        phone_number: userJson?.user?.phonenumber,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const updateCart = (index, type) => {
    let temp = [...numCart];
    let indexedCart = { ...temp[index] };

    if (type) indexedCart.quantity += 1;
    else if (indexedCart.quantity > 1) indexedCart.quantity -= 1;

    temp[index] = indexedCart;
    setNumCart(temp);

    let temp2 = [...cartDet.cartList];
    let indexedCart2 = { ...temp2[index] };

    if (type) indexedCart2.quantity += 1;
    else if (indexedCart2.quantity > 1) indexedCart2.quantity -= 1;

    temp2[index] = indexedCart2;

    let cartLocal = { cartList: [...temp2] };
    localStorage.setItem("listCart12345678910", JSON.stringify(cartLocal));

    calculate(cartLocal.cartList);
  };

  const remove = (index) => {
    let result = numCart.filter((v, i) => i !== index);
    setNumCart(result);

    let cartLocal = { cartList: [...result] };
    localStorage.setItem("listCart12345678910", JSON.stringify(cartLocal));
    setNum(num - 1);
    props.setCartCount(props.navCount - 1);
  };

  const cardDet = {
    src: DisInfect,
    title: "Floor Graphics | Printable Catalog | PRD-FG009",
    by: "By Pankaj Jadhav",
    isInStock: true,
    rate: 4.6,
    bought: "473",
    price: 400,
  };

  const [bottomDet, setBottomDet] = React.useState({});

  const addToCart = (det) => {
    setBottomDet(det);
    $("#bottomCart").css("display", "block");
    props.setCartCountFun(det);
    console.log("hello", bottomDet);
  };

  const leftImages = [Blank, Blank];
  return (
    <div className="row">
      <div className="col-3 justify-content-center mt-5 pt-3">
        <Link to="/login">
          <button
            className="btn shadow-none p-2 ml-4"
            style={{
              border: "1px solid #003459",
              width: "234px",
              borderRadius: " 5px",
            }}
          >
            <span className="loginbtn">
              Login or Sign up to save your Shopping Cart
            </span>
          </button>
        </Link>
        <Left imgs={leftImages} />
      </div>
      <div className="col mt-5 pt-3 ">
        <Grid>
          <Grid.Row columns="2">
            <Grid.Column
              style={{ width: "65%", marginLeft: "-20px", marginRight: "15px" }}
            >
              {" "}
              <div className="mb-4">
                <img
                  src={Back}
                  className="mr-1"
                  width="10"
                  height="10"
                  alt=""
                />
                <Link className="breadLink mt" to="/posters/covid-19">
                  Back To Shopping
                </Link>
              </div>
              <div>
                <p className="tablecart">Shopping Cart ({num} items)</p>
              </div>
              {num > 0 ? (
                <table class="table">
                  <thead>
                    <tr>
                      <th className="tablehead" scope="col">
                        Item
                      </th>
                      <th className="tablehead" scope="col">
                        Quantity
                      </th>
                      <th className="tablehead pl-3" scope="col">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {numCart.map((v, i) => (
                      <tr key={i}>
                        <td className="mr-0" style={{ width: "460px" }}>
                          <Grid>
                            <Grid.Row columns="2">
                              <Grid.Column>
                                <img
                                  src={v.imgUrl}
                                  width="120px"
                                  height="140px"
                                  alt={v.name}
                                />
                              </Grid.Column>
                              <Grid.Column className="ml-4 mt-2 mr-0">
                                <p
                                  className="tabletitle p-0 mb-2"
                                  style={{ width: "230px" }}
                                >
                                  {v.name}
                                </p>
                                <p
                                  className="tabledata p-0 m-0"
                                  style={{ width: "300px" }}
                                >
                                  Material : <span>{findMat(v.Material)}</span>
                                </p>
                                <p
                                  className="tabledata p-0 m-0"
                                  style={{ width: "300px" }}
                                >
                                  Dimension :{" "}
                                  <span>{findDim(v.Dimension)}</span>
                                </p>
                                <p className="tabledata p-0 m-0">
                                  Price : <span>₹ {v.originalPrice}</span>
                                </p>
                                <div className="mt-3">
                                  <p
                                    className="tabledata"
                                    onClick={() => remove(i)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    Remove
                                  </p>
                                </div>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </td>
                        <td className="ml-0" style={{ width: "150px" }}>
                          <ButtonGroup
                            size="small"
                            className="justify-content-center ml-3 mt-5"
                            aria-label="small outlined button group"
                            style={{ height: "30px", width: "30px" }}
                          >
                            <Button
                              onClick={() => updateCart(i, false)}
                              className="shadow-none"
                            >
                              <RemoveIcon style={{ color: "grey" }} />
                            </Button>
                            <Button
                              style={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "18px",
                                lineHeight: "22px",
                                color: "#000000",
                                paddingLeft: "18px",
                                paddingRight: "18px",
                              }}
                            >
                              {v.quantity}
                            </Button>
                            <Button onClick={() => updateCart(i, true)}>
                              <AddIcon style={{ color: "grey" }} />
                            </Button>
                          </ButtonGroup>
                        </td>
                        <td>
                          <p className="mt-5">
                            ₹{v.originalPrice * v.quantity}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div style={{ textAlign: "center", marginTop: "150px" }}>
                  <p style={{ fontSize: "30px" }} className="tablecart">
                    Nothing in your Cart
                  </p>
                  <Link to="/">Buy Some Items</Link>
                </div>
              )}
            </Grid.Column>
            <Grid.Column style={{ width: "35%" }}>
              <img
                src={Tape}
                alt=""
                style={{ position: "absolute", right: "120px", top: "-4px" }}
              />
              <div
                className="ml-4 mr-4 "
                style={{
                  border: "1px solid #D2D2D2",
                  textAlign: "center",
                }}
              >
                <Button
                  className="text-white"
                  style={{
                    width: "250px",
                    marginTop: "40px",
                    height: "50px",
                    backgroundColor: "#F2994A",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "14px",
                    lineHeight: "19px",
                    borderRadius: "5px",
                  }}
                >
                  Request a Quote{" "}
                </Button>
                <div
                  className=" pl-4 mt-2   pay"
                  style={{
                    width: "250px",
                    borderBottom: "1px solid #D2D2D2",
                    marginLeft: "31px",
                  }}
                >
                  <p
                    style={{
                      width: "200px",
                    }}
                  >
                    Get a quote for the items in cart with their prices at your
                    email address
                  </p>
                </div>

                <p className="orderDet">Order Details</p>

                <table width="250px" style={{ marginLeft: "32px" }}>
                  <tbody>
                    <tr height="30px">
                      <td className="pri left">Price</td>
                      <td className="pri right">₹{totalPay}</td>
                    </tr>
                    <tr height="30px">
                      <td className="shi left">Shipping</td>
                      <td className="shi right">₹220.00</td>
                    </tr>
                    <tr height="30px">
                      <td className="shi left">Discount</td>
                      <td className="shi right">₹0.00</td>
                    </tr>

                    <tr
                      height="50px"
                      style={{
                        borderTop: "1px solid #D2D2D2",
                        borderBottom: "1px solid #D2D2D2",
                      }}
                    >
                      <td className="pri left">Total Price</td>
                      <td className="pri right">₹{totalPay + 220}</td>
                    </tr>
                  </tbody>
                </table>

                <Button
                  className="text-white"
                  style={{
                    width: "250px",
                    marginTop: "20px",
                    height: "50px",
                    backgroundColor: "#003459",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "14px",
                    lineHeight: "19px",
                    borderRadius: "5px",
                  }}
                  onClick={displayRazorpay}
                  target="_blank"
                >
                  Proceed to Payment{" "}
                </Button>

                <table
                  width="250px"
                  style={{
                    marginLeft: "32px",
                    marginTop: "20px",
                    marginBottom: "30px",
                  }}
                >
                  <tbody>
                    <tr>
                      <td className="pri left">
                        <a href="/#" className="bnk">
                          Bank Transfer
                        </a>
                      </td>
                      <td rowSpan="3">
                        <img src={Pay} alt="" width="130px"></img>
                      </td>
                    </tr>
                    <tr>
                      <td className="shi left">
                        {" "}
                        <a href="/#" className="bnk">
                          Cheque Payment
                        </a>
                      </td>
                    </tr>
                    <tr height="30px">
                      <td className=" left">
                        <p
                          className="bnk mt-1"
                          style={{ color: "#003459", width: "120px" }}
                        >
                          Pay Offline by <br /> generating Performa
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="ml-5 mt-3">
                <p className="promo">Use a Promo Code</p>
                <OutlinedInput style={{ width: "250px", height: "40px" }} />
                <a
                  href="/#"
                  className="apply"
                  style={{
                    position: "absolute",
                    right: "75px",
                    marginTop: "7px",
                  }}
                >
                  Apply
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="orderDet mt-2" style={{ marginLeft: "-50px" }}>
            My Wishlist
          </Grid.Row>
          <Grid.Row className="mt-3">
            {[...Array(4)].map((v, i) => (
              <Grid.Column key={i} className={i !== 0 ? "ml-3" : "m-0 p-0"}>
                <Card2
                  data={cardDet}
                  addToCart={addToCart}
                  isCardClickAvail={true}
                />
                <div>
                  {[...Array(2)].map((v, i) => (
                    <div
                      key={i}
                      className={i !== 0 ? "carddiv mt-1" : "carddiv"}
                    >
                      <p className="pee">15% off on Self-adhesive sunboard</p>
                    </div>
                  ))}
                </div>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>

      <div
        className="mt-5"
        style={{ width: "100%", height: "200px", background: "#003459" }}
      ></div>

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
    </div>
  );
};

export default Tables;
