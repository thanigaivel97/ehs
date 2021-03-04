/*jshint esversion: 6 */
import React from "react";
import { Grid } from "semantic-ui-react";
import { TextField } from "@material-ui/core";
import Axios from "axios";
import { getOrdersById, findMat, findDim } from "../../helper/apiPath";
import swal from "sweetalert";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const TrackOrder = (props) => {
  const [orderId, setOrderId] = React.useState("");
  const [orderData, setOrderData] = React.useState([]);

  function track() {
    Axios.get(getOrdersById, {
      params: {
        orderId: orderId,
      },
    })
      .then((res) => {
        if (res.data.orders.length > 0) {
          setOrderData(res.data.orders);
        } else {
          swal("No Orders", "", "error");
        }
      })
      .catch((err) => console.log(err));
  }

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
  const classes = useStyles();
  const steps = getSteps();

  return (
    <>
      <div>
        <Grid className="track mx-auto mb-5">
          <Grid.Row className="mt-5 mx-auto">
            <TextField
              label="Order ID"
              style={{ width: " 506px" }}
              variant="outlined"
              onChange={(e) => setOrderId(e.target.value)}
            ></TextField>
          </Grid.Row>
          <Grid.Row className="mt-2 mx-auto">
            <button id="loginBtn" onClick={() => (orderId ? track() : null)}>
              Track
            </button>
          </Grid.Row>
        </Grid>
        <Grid >
          {orderData.map((v, i) => (
            <Grid.Row
              style={{
                border: "1px solid #D2D2D2",
                borderRadius: "10px",
                      width: "65%",
                margin:"auto",
                padding: "30px",
              }}
              className="mt-3 mb-5"
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
      </div>
    </>
  );
};

export default TrackOrder;
