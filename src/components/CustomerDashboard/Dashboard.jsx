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

const PersonalInfo = () => {
  return (
    <>
      <Grid className="mt-3 ml-5 ">
        <Grid.Row columns="2">
          <Grid.Column>
            {" "}
            <p className="perhead">Personal Information </p>
          </Grid.Column>
          <Grid.Column
            floated="right"
            style={{ position: "absolute", right: "225px" }}
          >
            {/* <Button className="perbut text-white">Update</Button> */}
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
        <Grid.Row>
          <p className="perside">
            Updating email address or phone number would require verification
            after making changes here.{" "}
          </p>
        </Grid.Row>
        <Grid.Row>
          <div className="ml-3">
            <Grid className="ml-3">
              <Grid.Row columns="2" className="mt-3">
                <Grid.Column>
                  <Grid.Row>
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col-3">
                            <label htmlFor="Name" className="formd">
                              Name
                            </label>
                          </div>
                          <div className="col-3">
                            <Input id="Name" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="col ml-4">
                        <div className="row">
                          <div className="col-6">
                            <label htmlFor="PASSWORD" className="formd">
                               PASSWORD
                            </label>
                          </div>
                          <div className="col-6">
                            <Input id="PASSWORD" type="password" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid.Row>
                  <Grid.Row className="mt-3">
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col-3">
                            <label htmlFor="EMAIL" className="formd">
                              EMAIL
                            </label>
                          </div>
                          <div className="col-3" style={{ marginLeft: "-5px" }}>
                            <Input id="EMAIL" type="email" />
                          </div>
                        </div>
                      </div>
                      {/* <div className="col" style={{ marginLeft: "-38px" }}>
                        <div className="row">
                          <div className="col-7">
                            <label htmlFor="CONFIRMPASSWORD" className="formd">
                              CONFIRM PASSWORD
                            </label>
                          </div>
                          <div className="col-5">
                            <Input id="CONFIRMPASSWORD" type="password" />
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </Grid.Row>
                  <Grid.Row className="mt-3">
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col-3">
                            <label htmlFor="MOBILE" className="formd">
                              MOBILE
                            </label>
                          </div>
                          <div className="col" style={{ marginLeft: "4px" }}>
                            <Input id="MOBILE" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid.Row>
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
          />

          </Grid.Column>
          <Grid.Column
            floated="right"
            style={{ position: "absolute", right: "225px" }}
          >
            <Button className="perbut2 text-white">Add Details </Button>
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

  const details = {
    Dimension: { one: false, two: true, three: false },
    Material: { one: false, two: true, three: false },
    bought: "473",
    by: "By Pankaj Jadhav",
    isInStock: true,
    quantity: 1,
    rate: 4.6,
    src: "/static/media/DisInfectant.ea3af391.svg",
    title: "Floor Graphics | Printable Catalog | PRD-FG009",
    price: 400,
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
        <Grid.Row
          style={{
            border: "1px solid #D2D2D2",
            borderRadius: "10px",
            width: "80%",
            padding: "30px",
          }}
        >
          <div>
            <div className="row">
              <p
                className=" perhead ml-3"
                style={{ fontSize: "14px", lineHeight: "17px" }}
              >
                ORDER # 76-2260441-433074
              </p>
              <p
                className="perhead "
                style={{
                  fontSize: "14px",
                  lineHeight: "17px",
                  marginLeft: "420px",
                }}
              >
                Ordered on Saturday, 10 October 2020
              </p>
            </div>
            <Grid className="ml-3">
              <Grid.Row columns="2">
                <Grid.Column className="ml-3">
                  <Grid.Row>
                    <Grid.Column>
                      <img
                        src={details.src}
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
                        {details.title}
                      </p>
                      <p
                        className="tabledata p-0 m-0"
                        style={{ width: "300px" }}
                      >
                        Material : <span>{findMat(details.Material)}</span>
                      </p>
                      <p
                        className="tabledata p-0 m-0"
                        style={{ width: "300px" }}
                      >
                        Dimension : <span>{findDim(details.Dimension)}</span>
                      </p>
                      <p className="tabledata p-0 m-0">
                        Price : <span>₹{details.price}</span>
                      </p>
                      <p className="tabledata p-0 m-0">
                        Quantity : <span>{details.quantity}</span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column
                  className="mt-3"
                  style={{ textAlign: "end", marginLeft: "239px" }}
                >
                  <p className="def" style={{ marginTop: "-5px" }}>
                    View Quotation
                  </p>
                  <p className="def" style={{ marginTop: "-5px" }}>
                    Get Invoice
                  </p>
                  <p className="def" style={{ marginTop: "-5px" }}>
                    Request Cancellation{" "}
                  </p>
                  <p className="def" style={{ marginTop: "-5px" }}>
                    Request Return or Replace{" "}
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
                    activeStep={activeStep}
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
                  Order Total: ₹520{" "}
                </p>
              </Grid.Row>
            </Grid>
          </div>
        </Grid.Row>
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

  return (
    <>
      <Grid className="ml-5">
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
                  <div key={i} className={i !== 0 ? "carddiv mt-1" : "carddiv"}>
                    <p className="pee">15% off on Self-adhesive sunboard</p>
                  </div>
                ))}
              </div>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
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

export default function Dashboard() {
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
            {redirect.three ? <Wishlist /> : null}
            {redirect.four ? <Quotes /> : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div
        className="mt-5"
        style={{ width: "100%", height: "200px", background: "#003459" }}
      ></div>
    </div>
  );
}
