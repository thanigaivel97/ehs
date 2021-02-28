/*jshint esversion: 6 */
import React from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Input, TextField, MenuItem } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import StepLabel from "@material-ui/core/StepLabel";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import PropTypes from "prop-types";
import StepConnector from "@material-ui/core/StepConnector";
import Check from "@material-ui/icons/Check";




const Supplier = (props) => {
  return (
    <>
      <Grid className="ml-3" style={{ width: "600px" }}>
        <Grid.Row>
          <p className="choose">CHOOSE A SUPLIER</p>
        </Grid.Row>
        <Grid.Row style={{ marginTop: "-12px" }}>
          <p className="chooseUnder">
            You can choose a suitable distributor from the dropdown list
          </p>
        </Grid.Row>
        <Grid.Row className="mt-3">
          <TextField
            select
            label="Select Distributor"
            style={{ width: " 506px" }}
            variant="outlined"
            onChange={()=>props.setBuyer(true)}
          >
            <MenuItem value="English">1</MenuItem>
            <MenuItem value="Hindi">2</MenuItem>
            <MenuItem value="BiLingual">3</MenuItem>
          </TextField>
        </Grid.Row>
        <Grid.Row className="mt-3">
          <TextField
            label="Seller Details"
            style={{ width: " 506px" }}
            variant="outlined"
          ></TextField>
        </Grid.Row>
        <Grid.Row className="mt-1">
          <p className="clickHere">
            Could not find your Distributor? <a href="#1">Click here to Add</a>
          </p>
        </Grid.Row>
      </Grid>
    </>
  );
};

const BuyersDetail = (props) => {
  return (
    <>
      <Grid className="ml-3" style={{ width: "600px" }}>
        <Grid.Row>
          <p className="fill">FILL BUYER’S DETAILS</p>
        </Grid.Row>
        <Grid.Row style={{ marginTop: "-12px" }}>
          <p className="chooseUnder">
            Please check all details as would you want them to be in the
            performa invoice
          </p>
        </Grid.Row>
        {props.buyer ? (
          <>
            <form>
              <Grid.Row className="mt-3">
                <TextField
                  label="Company Name"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="GST no"
                  style={{ width: " 250px", marginRight: "6px" }}
                  variant="outlined"
                ></TextField>
                <TextField
                  label="Pincode"
                  style={{ width: " 250px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="State"
                  style={{ width: " 250px", marginRight: "6px" }}
                  variant="outlined"
                ></TextField>
                <TextField
                  label="City"
                  style={{ width: " 250px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="Address1"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="Address2"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="Country"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="Contact Person Name"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="Contact Person Mobile"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="Contact Person Email"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
              <Grid.Row className="mt-3">
                <TextField
                  label="Billing Address"
                  style={{ width: " 506px" }}
                  variant="outlined"
                ></TextField>
              </Grid.Row>
            </form>
          </>
        ) : null}
      </Grid>
    </>
  );
};

const Shipping = (props) => {
  return (
    <>
      <Grid className="ml-3" style={{ width: "600px" }}>
        <Grid.Row>
          <p className="fill">BILLING ADDRESS</p>
        </Grid.Row>
        <Grid.Row style={{ marginTop: "-12px" }}>
          <input
            type="checkbox"
            id="shippingAdd"
            style={{
              margin: "4px 4px 4px 0px",
            }}
            onChange={() => props.setBilling((p)=>!p)}
          />
          <label htmlFor="shippingAdd" className="chooseUnder">
            Shipping address different from Billing address?
          </label>
        </Grid.Row>
        {props.billing ? (
          <>
            <Grid.Row className="mt-3">
              <TextField
                label="Address1"
                style={{ width: " 506px" }}
                variant="outlined"
              ></TextField>
            </Grid.Row>
            <Grid.Row className="mt-3">
              <TextField
                label="Address2"
                style={{ width: " 506px" }}
                variant="outlined"
              ></TextField>
            </Grid.Row>
            <Grid.Row className="mt-3">
              <TextField
                label="State"
                style={{ width: " 250px", marginRight: "6px" }}
                variant="outlined"
              ></TextField>
              <TextField
                label="City"
                style={{ width: " 250px" }}
                variant="outlined"
              ></TextField>
            </Grid.Row>
            <Grid.Row className="mt-3">
              <TextField
                label="Country"
                style={{ width: " 250px", marginRight: "6px" }}
                variant="outlined"
              ></TextField>
              <TextField
                label="Pincode"
                style={{ width: " 250px" }}
                variant="outlined"
              ></TextField>
            </Grid.Row>
          </>
        ) : null}
      </Grid>
    </>
  );
};

const Quotation = (props) => {
  const [activeStep, setActiveStep] = React.useState(2);
  const [buyer, setBuyer] = React.useState(false);
  const [billing, setBilling] = React.useState(false);

  
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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(0),
      maxWidth: 600,
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));

  const steps = [
    {
      label: <Supplier setActiveStep={setActiveStep} setBuyer={setBuyer} />,
    },
    {
      label: <BuyersDetail buyer={buyer} />,
    },
    {
      label: <Shipping billing={billing} setBilling={ setBilling}/>,
    },
  ];
  const classes = useStyles();

  return (
    <>
      <Grid className="quotation mx-auto mt-5 mb-5 p-3 pl-4">
        <Link to="/cart">
          <HighlightOffIcon
            style={{ color: "black", position: "absolute", right: "375px" }}
          />
        </Link>

        <Grid.Row
          className="quotation1 mt-4"
          style={{
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "24px",
            lineHeight: "29px",
            color: "#003459",
          }}
        >
          2 STEPS TO SELF GENERATE PROFORMO INVOICE
        </Grid.Row>

        <Grid.Row columns="2">
          <div className={classes.root}>
            <Stepper
              activeStep={activeStep}
              orientation="vertical"
              connector={<QontoConnector />}
            >
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel >{step.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>

          <Grid.Row className="ml-5 pl-2">
            <button id="loginBtn">PREVIEW PROFORMA</button>
          </Grid.Row>
          <Grid.Row className="mt-5 pl-5 pr-5">
            <p className="chooseUnder">
              Note: Creating performa invoice is a record of intent of the
              seller to supply goods in the cart. Supplies will be subject to
              issue of format purchase order as per terms of performa invoice.
            </p>
          </Grid.Row>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Quotation;
