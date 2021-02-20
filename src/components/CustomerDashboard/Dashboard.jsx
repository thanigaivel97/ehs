/*jshint esversion: 6 */
import { Grid } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";
import { Button } from "@material-ui/core";
import { Input } from "semantic-ui-react";
import CloseBtn from "../../images/ExitBtn.svg";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import $ from "jquery";
import DisInfect from "../../images/DisInfectant.svg";
import Card2 from "../category_page/Card2";
import Axios from "axios";
import { ModalCard } from "../category_page/Card2";
import ModelCard3 from "../product_list2/right/ModelCard3";
import { Link } from "react-router-dom";
import {
  getOrdersById,
  getUserById,
  updateUser,
  findMat,
  findDim,
} from "../../helper/apiPath";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { BottomAddedCart } from "../product_list2/right/Right";

const PersonalInfo = () => {
  const [name, setName] = React.useState("");
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [address, setAddress] = React.useState("");

  function updatePassword() {
    Axios.post(updateUser, {
      firstname: name,
      oldPassword: oldPassword,
      password: newPassword,
      userObjId: JSON.parse(localStorage.getItem("userDetails123"))._id,
    })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        return;
      })
      .catch((err) => console.log(err));
  }

  function updateAddress() {
    Axios.post(updateUser, {
      address: address,
      userObjId: JSON.parse(localStorage.getItem("userDetails123"))._id,
    })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        return;
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Grid className="mt-3 ml-5 ">
        {/* <Grid.Row columns="2">
          <Grid.Column>
            {" "}
            <p className="perhead">Personal Information </p>
          </Grid.Column>
          <Grid.Column
            floated="right"
            style={{ position: "absolute", right: "225px" }}
          >
            <Button className="perbut text-white">Update</Button> 
            <div style={{ marginTop: "140px" }}>
              <a href="/#" className="forget">
                Forgot Password
              </a>
              <br />
              <a href="/#" className="forget">
                Delete Account
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
         */}
        <Grid.Row>
          <div className="ml-3">
            <Grid className="ml-3">
              <Grid.Row columns="2" className="mt-3">
                <Grid.Column>
                  <Grid.Row>
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col-6">
                            <label htmlFor="PASSWORD" className="formd">
                              NAME
                            </label>
                          </div>
                          <div className="col-6">
                            <Input
                              id="NAME"
                              type="text"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>

                          <div className="col-6 mt-3">
                            <label htmlFor="PASSWORD" className="formd">
                              OLD PASSWORD
                            </label>
                          </div>
                          <div className="col-6 mt-3">
                            <Input
                              id="PASSWORD"
                              type="password"
                              onChange={(e) => setOldPassword(e.target.value)}
                            />
                          </div>

                          <div className="col-6 mt-3">
                            <label htmlFor="PASSWORD" className="formd">
                              NEW PASSWORD
                            </label>
                          </div>
                          <div className="col-6 mt-3">
                            <Input
                              id="PASSWORD"
                              type="password"
                              onChange={(e) => setNewPassword(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col ml-4">
                        <div className="row"></div>
                      </div>
                    </div>
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column
                  floated="right"
                  style={{ position: "absolute", right: "225px" }}
                >
                  <Button
                    className="perbut2 text-white"
                    onClick={updatePassword}
                  >
                    Update
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>

          <div></div>

          <div></div>
        </Grid.Row>

        <hr
          style={{
            marginTop: "50px",
            width: "120%",
            marginLeft: "-18px",
            border: " 1px solid #D2D2D2",
            marginBottom: "50px",
          }}
        />

        <Grid.Row columns="2">
          <Grid.Column>
            <p className="perhead mb-4">Address</p>

            {/* <div className="row">
              <div className="col-6">
                <p className="address">Address line 1</p>
                <p className="address">Address line 2</p>
                <p className="address">Address line 3</p>
                <p className="address">Address line 4</p>
                <div className="row">
                  <div className="col-3">
                    <a className="forget" href="/#">
                      Edit
                    </a>
                  </div>
                  <div className="col-3">
                    <a className="forget ml-1" href="/#">
                      Remove
                    </a>
                  </div>
                </div>
                <a className="def" href="/#">
                  Default
                </a>
              </div>

              <div className="col-6">
                <p className="address">Address line 1</p>
                <p className="address">Address line 2</p>
                <p className="address">Address line 3</p>
                <p className="address">Address line 4</p>
                <div className="row">
                  <div className="col-3">
                    <a className="forget" href="/#">
                      Edit
                    </a>
                  </div>
                  <div className="col-3">
                    <a className="forget ml-1" href="/#">
                      Remove
                    </a>
                  </div>
                </div>
                <a className="def" href="/#">
                  Set as Default
                </a>
              </div>
            </div> */}

            <textarea
              className="mx-auto d-block mt-3"
              id="loginUseraddress2"
              rows="5"
              // onChange={(e) => {
              //   setAddress(e.target.value);
              //   setLoginBody({
              //     emailid: emailid,
              //     password: password,
              //     firstname: firstname,
              //     lastname: lastname,
              //     phonenumber: phonenumber,
              //     address: e.target.value,
              //   });
              // }}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid.Column>
          <Grid.Column
            floated="right"
            style={{ position: "absolute", right: "225px" }}
          >
            <Button className="perbut2 text-white" onClick={updateAddress}>
              Add Address{" "}
            </Button>
          </Grid.Column>
        </Grid.Row>

        <hr
          style={{
            marginTop: "50px",
            width: "120%",
            marginLeft: "-18px",
            border: " 1px solid #D2D2D2",
            marginBottom: "50px",
          }}
        />

        {/*         
        <Grid.Row columns="2">
          <Grid.Column>
            <p className="perhead mb-4">Payment Preferences</p>

            <div className="row">
              <div className="col-6">
                <p className="address">Name on Card</p>
                <p className="address">**********7788</p>
                <p className="address">Expiry: 04/2022</p>
              </div>

              <div className="col-6">
                <p className="address">Name on Card</p>
                <p className="address">**********7788</p>
                <p className="address">Expiry: 04/2022</p>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column
            floated="right"
            style={{ position: "absolute", right: "225px" }}
          >
            <Button className="perbut3 text-white">Add Payment Option </Button>
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
    </>
  );
};

const Orders = () => {
  const [orderData, setOrderData] = React.useState([]);
  const [authUser, setAuthUser] = React.useState("");

  function getOrderFun() {
    Axios.get(getOrdersById, {
      params: {
        emailid: JSON.parse(localStorage.getItem("userDetails123")).emailid,
        phonenumber: JSON.parse(localStorage.getItem("userDetails123"))
          .phonenumber,
      },
    })
      .then((res) => {
        setOrderData(res.data.orders);
        console.log(res.data.orders);
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("userDetails123"))) {
      setAuthUser(
        JSON.parse(localStorage.getItem("userDetails123")).emailid ||
          JSON.parse(localStorage.getItem("userDetails123")).phonenumber
      );
      getOrderFun();
    }
  }, []);

  const Material = {
    one: "125 Micron (non-tearable)",
    two: "Self-adhesive (premium)",
    three: "Self-adhesive 3mm sunboard (premium)",
  };
  const Dimension = {
    one: "16in by 24in",
    two: "19in by 27in",
    three: "24in by 36in",
  };

  const findMat = (mat) => {
    if (mat.one) return Material.one;
    else if (mat.two) return Material.two;
    else if (mat.three) return Material.three;
  };

  const findDim = (dim) => {
    if (dim.one) return Dimension.one;
    else if (dim.two) return Dimension.two;
    else if (dim.three) return Dimension.three;
  };

  const QontoConnector = withStyles({
    alternativeLabel: {
      top: 10,
      left: "calc(-50% + 10px)",
      right: "calc(50% + 10px)",
    },
    active: {
      "& $line": {
        borderColor: "#003459",
      },
    },
    completed: {
      "& $line": {
        borderColor: "#003459",
      },
    },
    line: {
      borderColor: "#F2994A",
      borderTopWidth: 3,
      borderRadius: 1,
    },
  })(StepConnector);

  function QontoStepIcon(props) {
    const { completed } = props;

    return (
      <div>
        {completed ? (
          <Check
            style={{
              width: "24px",
              height: "24px",
              border: "5px solid  #003459",
              borderRadius: "50%",
              color: " #003459",
            }}
          />
        ) : (
          <div
            style={{
              width: "24px",
              height: "24px",
              border: "5px solid #F2994A",
              borderRadius: "50%",
            }}
          ></div>
        )}
      </div>
    );
  }

  QontoStepIcon.propTypes = {
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  function getSteps() {
    return [
      "Order Confirmed",
      "Order Dispatched",
      "Order Shipped",
      "Order Delivered",
    ];
  }

  // function getStepContent(step) {
  //   switch (step) {
  //     case 0:
  //       return "Order Confirmed";
  //     case 1:
  //       return "Order Dispatched";
  //     case 2:
  //       return "Order Shipped";
  //     case 3:
  //       return "Order Delivered";
  //     default:
  //       return "Unknown step";
  //   }
  // }

  const classes = useStyles();
  const [activeStep] = React.useState(1);
  const steps = getSteps();

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const [value, setValue] = React.useState(2);

  return (
    <>
      <Grid className="mt-3 ml-5 " style={{ width: "100%" }}>
        <Grid.Row columns="2">
          <p className="perhead">My Orders</p>
        </Grid.Row>

        {orderData.map((v, i) => (
          <Grid.Row
            style={{
              border: "1px solid #D2D2D2",
              borderRadius: "10px",
              width: "80%",
              padding: "30px",
            }}
            className="mt-3"
            key={i}
          >
            <div>
              <div className="row">
                <p
                  className=" perhead ml-3"
                  style={{ fontSize: "14px", lineHeight: "17px" }}
                >
                  {v.orderId}
                </p>
                <p
                  className="perhead "
                  style={{
                    fontSize: "14px",
                    lineHeight: "17px",
                    marginLeft: "420px",
                  }}
                >
                  Ordered on {v.created_at}
                </p>
              </div>
              <Grid className="ml-3">
                <Grid.Row columns="2">
                  <Grid.Column className="ml-3">
                    {v.itemDetails.map((val, ind) => (
                      <Grid.Row key={ind} className="mt-4">
                        <Grid.Column>
                          <img
                            src={val.imgUrl}
                            width="120px"
                            height="140px"
                            alt=""
                          />
                        </Grid.Column>
                        <Grid.Column className="ml-4 mt-2 mr-0">
                          <p
                            className="tabletitle p-0 mb-2"
                            style={{ width: "230px" }}
                          >
                            {val.name}
                          </p>
                          <p
                            className="tabledata p-0 m-0"
                            style={{ width: "300px" }}
                          >
                            Material : <span>{findMat(val.Material)}</span>
                          </p>
                          <p
                            className="tabledata p-0 m-0"
                            style={{ width: "300px" }}
                          >
                            Dimension : <span>{findDim(val.Dimension)}</span>
                          </p>
                          <p className="tabledata p-0 m-0">
                            Price : <span>₹{val.originalPrice}</span>
                          </p>
                          <p className="tabledata p-0 m-0">
                            Quantity : <span>{val.quantity}</span>
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    ))}
                  </Grid.Column>
                  <Grid.Column
                    className="mt-3"
                    style={{ textAlign: "end", marginLeft: "239px" }}
                  >
                    <p className="def" style={{ marginTop: "-5px" }}>
                      View Quotation
                    </p>
                    <p className="def" style={{ marginTop: "-5px" }}>
                      Request Cancellation{" "}
                    </p>
                    <button
                      type="button"
                      className="def"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      id="modalOpen"
                      style={{
                        marginTop: "-5px",
                        border: "0px none",
                        backgroundColor: "white",
                      }}
                    >
                      Review Product
                    </button>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <div className={classes.root}>
                    <Stepper
                      alternativeLabel
                      activeStep={
                        v.status === "Order Confirmed"
                          ? 1
                          : v.status === "Order Dispatched"
                          ? 2
                          : v.status === "Order Shipped"
                          ? 3
                          : v.status === "Order Delivered"
                          ? 4
                          : 1
                      }
                      connector={<QontoConnector />}
                    >
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel StepIconComponent={QontoStepIcon}>
                            <p className="steplabel">{label}</p>
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>

                    {/* Stepper Button Controls */}

                    {/* 
                   <div>
                    {activeStep === steps.length ? (
                      <div>
                        <Typography className={classes.instructions}>
                          All steps completed - you&apos;re finished
                        </Typography>
                        <Button
                          onClick={handleReset}
                          className={classes.button}
                        >
                          Reset
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <Typography className={classes.instructions}>
                          {getStepContent(activeStep)}
                        </Typography>
                        <div>
                          <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.button}
                          >
                            Back
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1
                              ? "Finish"
                              : "Next"}
                          </Button>
                        </div>
                      </div>
                    )}
                  </div> */}
                  </div>
                </Grid.Row>
                <Grid.Row>
                  <p
                    className="perhead"
                    style={{
                      fontSize: "14px",
                      lineHeight: "17px",
                      marginLeft: "717px",
                    }}
                  >
                    Order Total:{v.total}
                  </p>
                </Grid.Row>
              </Grid>
            </div>
          </Grid.Row>
        ))}
      </Grid>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content pt-3">
            <div className="modal-header border-0">
              <h5
                className="modal-title"
                id="exampleModalLabel"
                style={{ marginLeft: "35px" }}
              >
                Edit Review
              </h5>
              <button
                type="button"
                id="modalClose"
                className="btn shadow-none mr-2 p-0 m-0"
                data-dismiss="modal"
                aria-label="Close"
                style={{
                  width: "25px",
                  height: "25px",
                  background: "white",
                }}
              >
                <img src={CloseBtn} alt="close" />
              </button>
            </div>
            <div className="modal-body border-0">
              <p
                className="tabledata"
                style={{ marginTop: "-30px", marginLeft: "35px" }}
              >
                Reviewed on Tuesday, 27 October 2020
              </p>
              <Grid className="pl-5 pr-5">
                <Grid.Row className="mb-2">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="large"
                  />
                </Grid.Row>
                <Grid.Row className="mb-2">
                  <input
                    type="text"
                    defaultValue="Great poster!"
                    style={{ width: "100%" }}
                  ></input>
                </Grid.Row>
                <Grid.Row className="mb-2">
                  <textarea
                    defaultValue="High Quality posters as described! Happy with the purchase!!"
                    style={{ width: "100%", height: "100px" }}
                  ></textarea>
                </Grid.Row>
                <Grid.Row style={{ float: "right" }} className="pb-3">
                  <Button className="perbut1 text-white">Share Review</Button>
                </Grid.Row>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Wishlist = (props) => {
  const [orderData, setOrderData] = React.useState([]);

  const [selectedModal, setSelectedModal] = React.useState({});

  const [selectMatDim, setMatDim] = useState({
    Material: { one: false, two: false, three: false },
    Dimension: { one: false, two: false, three: false },
  });

  let card1Det, card2Det;
  try {
    card1Det = {
      select: "Material",
      box: [
        {
          src:
            "http://35.238.118.121:8080/assets/uploads/imgUrl-1610371399266.jpg",
          title: "125 Micron (non-tearable)",
          name: "one",
          select: "Material",
        },
        {
          src:
            "http://35.238.118.121:8080/assets/uploads/imgUrl-1610371464860.jpg",
          title: "Self-adhesive (premium)",
          name: "two",
          select: "Material",
        },
        {
          src:
            "http://35.238.118.121:8080/assets/uploads/imgUrl-1610371489961.jpg",
          title: "Self-adhesive 3mm sunboard (premium)",
          name: "three",
          select: "Material",
        },
      ],
    };
    card2Det = {
      select: "Dimension",
      box: [
        {
          src:
            "http://35.238.118.121:8080/assets/uploads/imgUrl-1610371522669.jpg",
          title: "16in by 24in",
          cus: true,
          cusWidth: "90",
          cusHeight: "50",
          name: "one",
          select: "Dimension",
        },
        {
          src:
            "http://35.238.118.121:8080/assets/uploads/imgUrl-1610371522669.jpg",
          title: "19in by 27in",
          cus: true,
          cusWidth: "100",
          cusHeight: "60",
          name: "two",
          select: "Dimension",
        },
        {
          src:
            "http://35.238.118.121:8080/assets/uploads/imgUrl-1610371522669.jpg",
          title: "24in by 36in",
          cus: true,
          cusWidth: "120",
          cusHeight: "80",
          name: "three",
          select: "Dimension",
        },
      ],
    };
  } catch (e) {}

  const card3Det = {
    select: "Quantity",
    quantity: 1,
    material: "Material: " + findMat(selectMatDim.Material),
    dimension: "Dimensions:" + findDim(selectMatDim.Dimension),
    price: selectedModal.originalPrice,
  };

  const ModalDet = {
    src: selectedModal.imgUrl,
    title: selectedModal.name,
    select: "Select Material",
    selectedMatDim: selectMatDim,
    card1: card1Det,
    card2: card2Det,
    card3: card3Det,
  };

  const [modalCarousel, setModalCar] = useState({
    one: true,
    two: false,
    three: false,
  });

  const setModalCarousel = (e) => {
    if (e.target.id === "one") {
      setModalCar({ one: true, two: false, three: false });
    } else if (e.target.id === "two") {
      setModalCar({ one: false, two: true, three: false });
    } else if (e.target.id === "three") {
      setModalCar({ one: false, two: false, three: true });
    }
  };

  const setModalCarouselb = (e) => {
    if (e.target.id === "oneb") {
      setModalCar({ one: true, two: false, three: false });
    } else if (e.target.id === "twob") {
      setModalCar({ one: false, two: true, three: false });
    } else if (e.target.id === "threeb") {
      setModalCar({ one: false, two: false, three: true });
    }
  };

  const selectedModalCard = (data) => {
    setSelectedModal(data);
    $("#modalOpen").trigger("click");
  };

  function getOrderFun() {
    Axios.get(
      getUserById + "/" + JSON.parse(localStorage.getItem("userDetails123"))._id
    )
      .then((res) => {
        setOrderData(res.data.users.wishList);
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => getOrderFun(), []);

  const [bottomDet, setBottomDet] = React.useState({});

  function removeWishList(id) {
    Axios.post(updateUser, {
      wishList: id,
      operation_type: 2,
      userObjId: JSON.parse(localStorage.getItem("userDetails123"))._id,
    }).then((data) => {
      getOrderFun();
    });
  }

  const addToCart = (det) => {
    setBottomDet(det);
    $("#bottomCart").css("display", "block");
    props.setCartCountFun(det);
    console.log("hello", bottomDet);
  };

  return (
    <>
      <Grid className="ml-5">
        <Grid.Row className="orderDet mt-2" style={{ marginLeft: "-50px" }}>
          My Wishlist
        </Grid.Row>
        <Grid.Row className="mt-3">
          {orderData.map((v, i) => (
            <Grid.Column key={i} className={i !== 0 ? "ml-3" : "m-0 p-0"}>
              <Card2
                data={v}
                addToCart={addToCart}
                isCardClickAvail={true}
                selectedModalCard={selectedModalCard}
              />
              <button
                style={{
                  backgroundColor: "#F2994A",
                  border: "none",
                  color: "white",
                  padding: "8px",
                  borderRadius: "8px",
                }}
                onClick={() => removeWishList(v._id)}
              >
                Remove
              </button>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>

      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        id="modalOpen"
        style={{ display: "none" }}
      >
        {""}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="exampleModalLabel">
                {""}
              </h5>
              <button
                type="button"
                id="modalClose"
                className="btn shadow-none mr-2 p-0 m-0"
                data-dismiss="modal"
                aria-label="Close"
                style={{
                  width: "25px",
                  height: "25px",
                  background: "white",
                }}
              >
                <img src={CloseBtn} alt="close" />
              </button>
            </div>
            <div className="modal-body border-0">
              <img
                width="320px"
                height="250px"
                className="d-block mx-auto"
                style={{ marginTop: "-30px" }}
                src={ModalDet.src}
                alt={ModalDet.title}
              />
              <p
                className="text-center mt-1"
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "16px",
                  lineHeight: "19px",

                  color: "#000000",
                }}
              >
                {ModalDet.title}
              </p>
              {modalCarousel.one ? (
                <Grid>
                  <Grid.Row className="text-center justify-content-center">
                    <p
                      className="text-center mt-1"
                      style={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "18px",
                        lineHeight: "22px",
                        textAlign: "center",
                        color: "#000000",
                      }}
                    >
                      Select {ModalDet.card1?.select}
                    </p>
                  </Grid.Row>
                  <Grid.Row className="mx-auto" columns="3">
                    {ModalDet.card1?.box.map((v, i) => (
                      <Grid.Column
                        key={i}
                        className={i !== 0 ? "ml-4" : "ml-3"}
                      >
                        <ModalCard
                          setMatDim={setMatDim}
                          selected={selectMatDim.Material}
                          addToCart={addToCart}
                          boxDet={v}
                          oriDet={selectedModal}
                          name="material"
                        />
                      </Grid.Column>
                    ))}
                  </Grid.Row>
                </Grid>
              ) : null}

              {modalCarousel.two ? (
                <Grid>
                  <Grid.Row className="text-center justify-content-center">
                    <p
                      className="text-center mt-1"
                      style={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "18px",
                        lineHeight: "22px",
                        textAlign: "center",
                        color: "#000000",
                      }}
                    >
                      Select {ModalDet.card2.select}
                    </p>
                  </Grid.Row>
                  <Grid.Row className="mx-auto" columns="3">
                    {ModalDet.card2.box.map((v, i) => (
                      <Grid.Column
                        key={i}
                        className={i !== 0 ? "ml-4" : "ml-3"}
                      >
                        <ModalCard
                          setMatDim={setMatDim}
                          selected={selectMatDim.Dimension}
                          addToCart={addToCart}
                          boxDet={v}
                          oriDet={selectedModal}
                          name="dimension"
                        />
                      </Grid.Column>
                    ))}
                  </Grid.Row>
                </Grid>
              ) : null}

              {modalCarousel.three ? (
                <Grid>
                  <Grid.Row className="text-center justify-content-center">
                    <p
                      className="text-center mt-1"
                      style={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "18px",
                        lineHeight: "22px",
                        textAlign: "center",
                        color: "#000000",
                      }}
                    >
                      Select {ModalDet.card3.select}
                    </p>
                  </Grid.Row>
                  <Grid.Row className="mx-auto justify-content-center">
                    <ModelCard3
                      det={ModalDet.card3}
                      selectMatDim={selectMatDim}
                      addToCart={addToCart}
                      oriDet={selectedModal}
                    />
                  </Grid.Row>
                </Grid>
              ) : null}
            </div>
            <div className="modal-footer border-0 justify-content-center bg-white pt-2">
              <div
                style={{ position: "absolute", left: "22px", bottom: "5px" }}
              >
                <NavigateBeforeIcon
                  style={
                    modalCarousel.two
                      ? { fontSize: "30px" }
                      : { display: "none" }
                  }
                  id="oneb"
                  onClick={setModalCarouselb}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "22px",
                  bottom: "5px",
                }}
              >
                <NavigateBeforeIcon
                  style={
                    modalCarousel.three
                      ? { fontSize: "30px" }
                      : { display: "none" }
                  }
                  id="twob"
                  onClick={setModalCarouselb}
                />
              </div>

              <div
                id="one"
                className={modalCarousel.one ? "bg-secondary" : ""}
                style={{
                  cursor: "pointer",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#D2D2D2",
                }}
                onClick={setModalCarousel}
              ></div>
              <div
                id="two"
                className={modalCarousel.two ? "ml-2 bg-secondary" : "ml-2"}
                style={{
                  cursor: "pointer",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#D2D2D2",
                }}
                onClick={setModalCarousel}
              ></div>
              <div
                id="three"
                className={modalCarousel.three ? "ml-2 bg-secondary" : "ml-2"}
                style={{
                  cursor: "pointer",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#D2D2D2",
                }}
                onClick={setModalCarousel}
              ></div>

              <div
                style={{ position: "absolute", right: "22px", bottom: "5px" }}
              >
                <NavigateNextIcon
                  style={
                    modalCarousel.one
                      ? { fontSize: "30px" }
                      : { display: "none" }
                  }
                  id="twob"
                  onClick={setModalCarouselb}
                />
              </div>
              <div
                style={{ position: "absolute", right: "22px", bottom: "5px" }}
              >
                <NavigateNextIcon
                  style={
                    modalCarousel.two
                      ? { fontSize: "30px" }
                      : { display: "none" }
                  }
                  id="threeb"
                  onClick={setModalCarouselb}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
};

const Quotes = () => {
  const [s, sets] = useState(false);

  return (
    <>
      <Grid className="ml-5">
        <Grid.Row
          className="orderDet mt-2 mb-3"
          style={{ marginLeft: "-50px" }}
        >
          Quotes Requested
        </Grid.Row>
        <Grid.Row
          style={{
            border: "1px solid #D2D2D2",
            borderRadius: "10px",
            width: "80%",
            padding: "40px",
          }}
        >
          <div>
            <div className="row">
              <div className="col-6">
                <p
                  className=" perside ml-3"
                  style={{ fontSize: "14px", lineHeight: "17px" }}
                >
                  Requested on Saturday, 10 October 2020
                </p>
              </div>
              <div className="col-6">
                <p
                  className="perside "
                  style={{
                    fontSize: "14px",
                    lineHeight: "17px",
                    marginLeft: "220px",
                    width: "200px",
                  }}
                >
                  QUOTATION #76-2260441
                </p>
              </div>
              <div className="row">
                <p
                  className=" perhead ml-5"
                  style={{ fontSize: "14px", lineHeight: "17px" }}
                >
                  VALID TILL Saturday, 17 October 2020
                </p>
              </div>
              <div className="row mt-5 ml-3" style={{ width: "100%" }}>
                <div className="col-4">
                  <p className="perside">Buyer Details</p>
                  <p className="perhead">ABC Company</p>
                  <p className="perside">
                    Contact person name
                    <br />
                    Contact person phone
                    <br />
                    Contact person email
                  </p>
                  <p className="perside">Address line 2</p>
                  <p className="perside">GST no</p>
                  <Button
                    className="perbut2 text-white"
                    onClick={() => sets(true)}
                  >
                    Confirm Purchase
                  </Button>
                </div>

                <div className="col-4">
                  <p className="perside">Supplier Details</p>
                  <p className="perhead">Dichroic Labs LLP</p>
                  <p className="perside">
                    45,old Agrawal Nagar,
                    <br /> Indore,
                    <br /> 452001, IN, Madhya Pradesh
                  </p>
                  <p className="perside">Phone no</p>
                  <p className="perside">Email</p>
                  <div className="carddiv" style={{ cursor: "pointer" }}>
                    <p className="pee">View Quotation</p>
                  </div>
                </div>

                <div className="col-4">
                  <p className="perhead">Products:4</p>
                  <p className="perhead">Total Quantity:5</p>
                  <div className="row">
                    <img
                      className="col-4"
                      src={DisInfect}
                      alt=""
                      height="70px"
                    ></img>
                    <img
                      className="col-4"
                      src={DisInfect}
                      alt=""
                      height="70px"
                    ></img>
                    <img
                      className="col-4"
                      src={DisInfect}
                      alt=""
                      height="70px"
                    ></img>
                    <img
                      className="col-4"
                      src={DisInfect}
                      alt=""
                      height="70px"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p
            className="perside ml-3 mt-2"
            style={!s ? { display: "none" } : { display: "block" }}
          >
            An email has been sent to you and the supplier on the registered
            email addresses.
          </p>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default function Dashboard(props) {
  useEffect(() => {
    document.title = "Ehs prints | Dashboard";
  }, []);

  const [redirect, setRedirect] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
  });

  const setRedirectFun = (e) => {
    if (e.target.id === "one") {
      setRedirect({ one: true, two: false, three: false, four: false });
    } else if (e.target.id === "two") {
      setRedirect({ one: false, two: true, three: false, four: false });
    } else if (e.target.id === "three") {
      setRedirect({ one: false, two: false, three: true, four: false });
    } else if (e.target.id === "four") {
      setRedirect({ one: false, two: false, three: false, four: true });
    }
  };

  return (
    <div>
      <Grid>
        <Grid.Row columns="2">
          <Grid.Column style={{ width: "20%" }}>
            <div className="mt-3">
              <div
                onClick={setRedirectFun}
                id="one"
                className="listanchor "
                style={redirect.one ? { backgroundColor: "#F2F2F2" } : null}
              >
                PERSONAL INFORMATION
              </div>
              <div
                onClick={setRedirectFun}
                id="two"
                className="listanchor"
                style={redirect.two ? { backgroundColor: "#F2F2F2" } : null}
              >
                MY ORDERS
              </div>
              <div
                onClick={setRedirectFun}
                id="three"
                className="listanchor"
                style={redirect.three ? { backgroundColor: "#F2F2F2" } : null}
              >
                MY WISHLIST
              </div>
              <div
                onClick={setRedirectFun}
                id="four"
                className="listanchor"
                style={redirect.four ? { backgroundColor: "#F2F2F2" } : null}
              >
                QUOTES REQUESTED
              </div>
              <div
                className="listanchor text-danger"
                style={redirect.five ? { backgroundColor: "#F2F2F2" } : null}
                onClick={() => {
                  localStorage.removeItem("userDetails123");
                  localStorage.removeItem("ehstoken12345678910");
                  window.location.replace(
                    "http://" + window.location.host + "/"
                  );
                }}
              >
                LOG OUT
              </div>
            </div>
          </Grid.Column>
          <Grid.Column style={{ width: "80%" }}>
            {redirect.one ? <PersonalInfo /> : null}
            {redirect.two ? <Orders /> : null}
            {redirect.three ? (
              <Wishlist setCartCountFun={props.setCartCountFun} />
            ) : null}
            {redirect.four ? <Quotes /> : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="mt-5" style={{ width: "100%", background: "#003459" }}>
        <Grid style={{ paddingTop: "50px" }}>
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
}
